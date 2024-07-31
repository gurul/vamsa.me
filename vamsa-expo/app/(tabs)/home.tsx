import React, { useState, useEffect } from "react";
import { Text, View, Pressable, StyleSheet, TextInput, Alert, Modal, TouchableOpacity } from "react-native";
import axios from 'axios'; // Import axios for API calls

export default function Index() {
  // Default home screen with the two buttons
  const [view, setView] = useState('initial'); 
  const [familyName, setFamilyName] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [personalInfo, setPersonalInfo] = useState({ name: '', birthday: '', files: '' });
  const [infoSubmitted, setInfoSubmitted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  // Function to fetch data from the backend
  const fetchDataFromBackend = async () => {
    try {
      const response = await axios.get('https://vamsa/api/data'); // Update with your backend endpoint
      console.log(response.data); // Handle the response data as needed
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataFromBackend(); // Fetch data when the component mounts
  }, []);

  // Handle family creation and code generation
  const showNotification = (message: string) => {
    setNotificationMessage(message);
    setNotificationVisible(true);
  };

  const handleCreateFamily = () => {
    if (familyName) {
      const code = Math.random().toString(36).substring(2, 8).toUpperCase();
      setGeneratedCode(code);
    } else {
      showNotification("Please enter a family name."); 
    }
  };

  const handleSubmitPersonalInfo = () => {
    if (personalInfo.name && personalInfo.birthday && personalInfo.files) {
      setInfoSubmitted(true);
      setModalVisible(false);
    } else {
      showNotification("Please fill in all fields.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Shows the back button only if we're not on the initial view */}
      {view !== 'initial' && (
        <Pressable style={styles.backButton} onPress={() => { setView('initial'); setInfoSubmitted(false); }}>
          <Text style={styles.backButtonText}>Back</Text>
        </Pressable>
      )}
      {/* Initial view with two buttons */}
      {view === 'initial' && (
        <>
          <Text style={styles.header}>Join or create a family tree</Text>
          <Pressable style={styles.button} onPress={() => setView('join')}>
            <Text style={styles.buttonText}>Join Family Tree</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => setView('create')}>
            <Text style={styles.buttonText}>Create Family Tree</Text>
          </Pressable>
        </>
      )}
      {/* View when 'Create Family Tree' button is clicked */}
      {view === 'create' && (
        <View style={styles.createContainer}>
          {generatedCode ? (
            <View>
              <Text style={styles.familyInfo}>
                Family Name: {familyName} | Join Code: {generatedCode}
              </Text>
              <Pressable style={[styles.button, styles.centeredButton]} onPress={() => setModalVisible(true)}>
                <Text style={styles.buttonText}>{infoSubmitted ? "Edit Your Profile" : "Create Your Profile"}</Text>
              </Pressable>
            </View>
          ) : (
            <>
              <TextInput
                style={styles.input}
                placeholder="Enter family name..."
                value={familyName}
                onChangeText={setFamilyName}
              />
              <Pressable style={styles.plusButton} onPress={handleCreateFamily}>
                <Text style={styles.plusButtonText}>+</Text>
              </Pressable>
            </>
          )}
        </View>
      )}
      {/* View when 'Join Family Tree' button is clicked */}
      {view === 'join' && (
        <View style={styles.joinBox}>
          <TextInput 
            style={styles.input} 
            placeholder="Enter invite code..." 
          />
          <Pressable style={styles.button} onPress={() => {/* Handle join code submission */}}>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
        </View>
      )}
      {/* View for entering personal information */}
      {view === 'personalInfo' && (
        <View style={styles.joinBox}>
          <TextInput 
            style={styles.input} 
            placeholder="Enter invite code..." 
          />
          <Pressable style={styles.button} onPress={() => {/* Handle join code submission */}}>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
        </View>
      )}

      {/* Modal for personal information */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name..."
            value={personalInfo.name}
            onChangeText={(text) => setPersonalInfo({ ...personalInfo, name: text })}
          />
          <Text style={styles.label}>Birthday</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your birthday..."
            value={personalInfo.birthday}
            onChangeText={(text) => setPersonalInfo({ ...personalInfo, birthday: text })}
          />
          <Text style={styles.label}>Upload Health Files</Text>
          <TextInput
            style={styles.input}
            placeholder="Upload health files..."
            value={personalInfo.files}
            onChangeText={(text) => setPersonalInfo({ ...personalInfo, files: text })}
          />
          <Pressable style={styles.button} onPress={handleSubmitPersonalInfo}>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
        </View>
      </View>
    </Modal>

      {/* Display personal info as a circle */}
      {infoSubmitted && (
        <TouchableOpacity
        style={styles.circle}
        onPress={() => setInfoModalVisible(true)}
      >
        <Text style={styles.circleText}>{personalInfo.name.charAt(0)}</Text>
      </TouchableOpacity>
      
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={infoModalVisible}
        onRequestClose={() => setInfoModalVisible(false)}
      >
        <View style={styles.infoModalContainer}>
          <View style={styles.infoModalContent}>
            <Text style={styles.modalText}>Name: {personalInfo.name}</Text>
            <Text style={styles.modalText}>Birthday: {personalInfo.birthday}</Text>
            <Text style={styles.modalText}>Files: {personalInfo.files}</Text>
            <Pressable
              style={styles.closeButton}
              onPress={() => setInfoModalVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

       {/* Notification Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={notificationVisible}
        onRequestClose={() => setNotificationVisible(false)}
      >
        <View style={styles.notificationContainer}>
          <View style={styles.notificationContent}>
            <Text style={styles.notificationText}>{notificationMessage}</Text>
            <Pressable
              style={styles.closeNotificationButton}
              onPress={() => setNotificationVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5DC', // Light beige background
  },
  header: {
    fontSize: 18,
    marginBottom: 20,
    color: '#6B4226', // Brown color
  },
  button: {
    backgroundColor: '#4CAF50', // Green color
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  plusButton: {
    backgroundColor: '#8FBC8F', // Darker green
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  plusButtonText: {
    color: '#fff',
    fontSize: 30,
  },
  joinBox: {
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    borderColor: '#6B4226', // Brown border
    borderWidth: 1,
    padding: 10,
    width: 250,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#FFF8DC', // Light beige input background
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
    backgroundColor: '#6B4226', // Brown color
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  createContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  familyInfo: {
    fontSize: 16,
    color: '#6B4226', // Brown color
    marginBottom: 20,
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#8FBC8F',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  circleText: {
    color: '#fff',
    fontSize: 40,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
  },
  centeredButton: {
    alignSelf: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    color: '#6B4226',
    fontSize: 16,
  },
  infoModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  infoModalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#6B4226',
  },
  closeButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  notificationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  notificationContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
  },
  notificationText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#6B4226',
  },
  closeNotificationButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
});
