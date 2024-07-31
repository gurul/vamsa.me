import React from "react";
import { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button, Modal, Pressable, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DatePickerModal } from 'react-native-paper-dates';
import axios from 'axios';

export default function About() {
  // Example function to fetch timebox data from backend
  const fetchTimeboxData = async () => {
    try {
      const response = await axios.get('https://your-backend-server/api/timebox');
      console.log(response.data); // Handle the response data as needed
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTimeboxData(); // Fetch data when the component mounts
  }, []);

  const [ text, onChangeText ] = useState('');
  // const [ date, setDate ] = useState(new Date());
  const [ date, setDate ] = useState(undefined);
  const [ open, setOpen ] = useState(false);
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ storedMemory, setStoredMemory ] = useState(null);
  const [ storedDate, setStoredDate ] = useState(null);
  const [ displayMemory, setDisplayMemory ] = useState('');

  const handleAddMemory = async () => {
    try {
      await AsyncStorage.setItem('memory', text);
      await AsyncStorage.setItem('revealDate', date.toString());
      setDisplayMemory(text);
      setModalVisible(false);
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
        if (new Date() >= revealDate) {
          setStoredMemory(savedMemory);
        } else {
          alert('Memory not yet available!');
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
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Text>Type your message!</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              multiline
              numberOfLines={4}
              placeholder="Enter memory"
            />

            <Pressable
              style={styles.buttonView}
              onPress={() => {
                setOpen(true);
              }}
              >
              <Text style={styles.font}>Select Date</Text>
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
              style={styles.buttonView}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              >
              <Text style={styles.font}>Submit memory</Text>
            </Pressable>

            <Pressable
              style={styles.buttonView}
              onPress={() => {
                  setModalVisible(false)
                }}
              >
              <Text style={styles.font}>Cancel</Text>
            </Pressable>
            
          </View>
        </View>
      </Modal>
      <Text style={styles.container}>{text}</Text>
      <View style={styles.container2}>
      <Pressable
        style={styles.buttonView}
        onPress={() => {
          setModalVisible(true);
        }}
        >
        <Text style={styles.font}>Create a new memory :)</Text>
      </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  container2 :{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 90,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonView: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#023020',
    margin: 3,
  },
  font: {
    color: 'white',
  },
});