import { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button, Modal, Pressable, Alert } from "react-native";

export default function About() {

  const [ text, onChangeText ] = useState('');
  const [ modalVisible, setModalVisible ] = useState(false);

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
              placeholder="etc etc etc "
              />
            <Button
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              title="Submit memory"
            />
          </View>
        </View>
      </Modal>
      <Text style={styles.container}>{text}</Text>
      <View style={styles.container2}>
      <Button
        onPress={() => {
          setModalVisible(true);
        }}
        title="Create a memory"
      />
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
});