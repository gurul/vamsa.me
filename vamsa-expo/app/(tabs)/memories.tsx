import React, { useEffect, useState } from "react";
import { Text, TextInput, View, StyleSheet, Modal, Pressable, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DatePickerModal } from 'react-native-paper-dates';
import { BlurView } from 'expo-blur';

export default function About() {

  const [text, onChangeText] = useState('');
  const [date, setDate] = useState(undefined);
  const [open, setOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [storedMemory, setStoredMemory] = useState(null);
  const [storedDate, setStoredDate] = useState(null);
  const [isMemoryAvailable, setIsMemoryAvailable] = useState(false);

  useEffect(() => {
    checkMemory();
  }, []);

  const handleAddMemory = async () => {
    try {
      await AsyncStorage.setItem('memory', text);
      await AsyncStorage.setItem('revealDate', date.toString());
      setModalVisible(false);
      checkMemory();
    } catch (error) {
      console.error(error);
    }
  };

  const checkMemory = async () => {
    try {
      const savedMemory = await AsyncStorage.getItem('memory');
      const savedDate = await AsyncStorage.getItem('revealDate');
      if (savedMemory && savedDate) {
        const revealDate = new Date(savedDate);
        setStoredDate(revealDate);
        if (new Date() >= revealDate) {
          setStoredMemory(savedMemory);
          setIsMemoryAvailable(true);
        } else {
          setStoredMemory(savedMemory);
          setIsMemoryAvailable(false);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen, setDate]
  );

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal closed');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Type your memory!</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              multiline
              numberOfLines={4}
              placeholder="Enter memory"
            />

            <Pressable
              style={styles.button}
              onPress={() => setOpen(true)}
              >
              <Text style={styles.buttonText}>Select Date</Text>
            </Pressable>
            <DatePickerModal
              locale="en"
              mode="single"
              visible={open}
              onDismiss={onDismissSingle}
              date={date}
              onConfirm={onConfirmSingle}
            />

            <Pressable
              style={styles.button}
              onPress={handleAddMemory}
              >
              <Text style={styles.buttonText}>Submit Memory</Text>
            </Pressable>

            <Pressable
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
              >
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={styles.memoryContainer}>
        {storedMemory ? (
          isMemoryAvailable ? (
            <Text style={styles.memoryText}>{storedMemory}</Text>
          ) : (
            <BlurView intensity={100} style={styles.blurredMemoryView}>
              <Text style={styles.memoryText}>Memory will be revealed on: {storedDate?.toLocaleDateString()}</Text>
            </BlurView>
          )
        ) : (
          <Text style={styles.noMemoryText}>No memory saved yet. Create one now!</Text>
        )}
      </View>

      <Pressable
        style={styles.createButton}
        onPress={() => setModalVisible(true)}
        >
        <Text style={styles.buttonText}>Create a New Memory :)</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBFAFA',
  },
  memoryContainer: {
    marginBottom: 30,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  memoryText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
  blurredMemoryView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  revealDateText: {
    fontSize: 16,
    color: '#999',
    fontStyle: 'italic',
    marginTop: 10,
  },
  noMemoryText: {
    fontSize: 18,
    color: '#aaa',
  },
  createButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    margin: 20,
    borderRadius: 5,
    width: 250,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 15,
  },
  input: {
    height: 100,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#f44336',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
});
