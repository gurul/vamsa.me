import React, { useState } from "react";
import { Text, View, Pressable, StyleSheet, TextInput, Modal, TouchableOpacity, Picker, ScrollView, Image } from "react-native";

export default function Index() {
  const [view, setView] = useState('initial');
  const [familyName, setFamilyName] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [personalInfo, setPersonalInfo] = useState({ name: '', birthday: '' });
  const [infoSubmitted, setInfoSubmitted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [addMemberModalVisible, setAddMemberModalVisible] = useState(false);
  const [newMemberInfo, setNewMemberInfo] = useState({ name: '', birthday: '' });
  const [familyMembers, setFamilyMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [familyMemberModalVisible, setFamilyMemberModalVisible] = useState(false);
  const [relationship, setRelationship] = useState('');
  const [selectedNode, setSelectedNode] = useState(null);
  const [familyTreeModalVisible, setFamilyTreeModalVisible] = useState(false);
  const [joinCode, setJoinCode] = useState('');

  const showNotification = (message) => {
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

  const handleJoinCode = () => {
    if (joinCode) {
      setModalVisible(false);
      setFamilyTreeModalVisible(true);
    } else {
      showNotification("Please enter a valid join code.");
    }
  };

  const handleSubmitPersonalInfo = () => {
    if (personalInfo.name && personalInfo.birthday) {
      setInfoSubmitted(true);
      setModalVisible(false);
    } else {
      showNotification("Please fill in all fields.");
    }
  };

  const handleAddFamilyMember = () => {
    if (newMemberInfo.name && newMemberInfo.birthday && relationship && selectedNode) {
      setFamilyMembers([...familyMembers, { ...newMemberInfo, relationship, relatedTo: selectedNode }]);
      setNewMemberInfo({ name: '', birthday: '' });
      setRelationship('');
      setSelectedNode(null);
      setAddMemberModalVisible(false);
    } else {
      showNotification("Please fill in all fields.");
    }
  };

  const handleMemberPress = (member) => {
    setSelectedMember(member);
    setFamilyMemberModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {view !== 'initial' && (
        <Pressable style={styles.backButton} onPress={() => { setView('initial'); setInfoSubmitted(false); }}>
          <Text style={styles.backButtonText}>Back</Text>
        </Pressable>
      )}
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
              {infoSubmitted && (
                <Pressable style={[styles.button, styles.centeredButton]} onPress={() => setAddMemberModalVisible(true)}>
                  <Text style={styles.buttonText}>Add Family Member</Text>
                </Pressable>
              )}
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
      {view === 'join' && (
        <View style={styles.joinBox}>
          <TextInput
            style={styles.input}
            placeholder="Enter invite code..."
            value={joinCode}
            onChangeText={setJoinCode}
          />
          <Pressable style={styles.button} onPress={handleJoinCode}>
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
        </View>
      )}
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
              placeholder="Birthday (YYYY-MM-DD)"
              value={personalInfo.birthday}
              onChangeText={(text) => setPersonalInfo({ ...personalInfo, birthday: text })}
            />
            <Pressable style={styles.button} onPress={handleSubmitPersonalInfo}>
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {infoSubmitted && (
        <View style={styles.profileContainer}>
          <TouchableOpacity
            style={styles.circle}
            onPress={() => setInfoModalVisible(true)}
          >
            <Text style={styles.circleText}>{personalInfo.name.charAt(0)}</Text>
          </TouchableOpacity>
        </View>
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
            <Pressable
              style={styles.closeButton}
              onPress={() => setInfoModalVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={addMemberModalVisible}
        onRequestClose={() => setAddMemberModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter family member's name..."
              value={newMemberInfo.name}
              onChangeText={(text) => setNewMemberInfo({ ...newMemberInfo, name: text })}
            />
            <Text style={styles.label}>Birthday</Text>
            <TextInput
              style={styles.input}
              placeholder="Birthday (YYYY-MM-DD)"
              value={newMemberInfo.birthday}
              onChangeText={(text) => setNewMemberInfo({ ...newMemberInfo, birthday: text })}
            />
            <Text style={styles.label}>Relationship</Text>
            <Picker
              selectedValue={relationship}
              style={styles.picker}
              onValueChange={(itemValue) => setRelationship(itemValue)}
            >
              <Picker.Item label="Pick relationship" value="" />
              <Picker.Item label="Parent of" value="parent" />
              <Picker.Item label="Child of" value="child" />
              <Picker.Item label="Spouse of" value="spouse" />
            </Picker>
            {relationship && (
              <>
                <Text style={styles.label}>Related To</Text>
                <Picker
                  selectedValue={selectedNode}
                  style={styles.picker}
                  onValueChange={(itemValue) => setSelectedNode(itemValue)}
                >
                  <Picker.Item label="Pick family member" value="" />
                  {familyMembers.map((member, index) => (
                    <Picker.Item key={index} label={member.name} value={member} />
                  ))}
                </Picker>
              </>
            )}
            <Pressable style={styles.button} onPress={handleAddFamilyMember}>
              <Text style={styles.buttonText}>Add Family Member</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
      {familyMembers.map((member, index) => (
        <View key={index} style={styles.profileContainer}>
          <TouchableOpacity
            style={styles.circle}
            onPress={() => handleMemberPress(member)}
          >
            <Text style={styles.circleText}>{member.name.charAt(0)}</Text>
          </TouchableOpacity>
        </View>
      ))}
      {selectedMember && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={familyMemberModalVisible}
          onRequestClose={() => setFamilyMemberModalVisible(false)}
        >
          <View style={styles.infoModalContainer}>
            <View style={styles.infoModalContent}>
              <Text style={styles.modalText}>Name: {selectedMember.name}</Text>
              <Text style={styles.modalText}>Birthday: {selectedMember.birthday}</Text>
              <Pressable
                style={styles.closeButton}
                onPress={() => setFamilyMemberModalVisible(false)}
              >
                <Text style={styles.buttonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={familyTreeModalVisible}
        onRequestClose={() => setFamilyTreeModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <Image source={require('./images/famtree1.png')} style={styles.treeImage}/>
            <ScrollView>
              {familyMembers.map((member, index) => (
                <View key={index} style={styles.memberContainer}>
                  <Text style={styles.modalText}>Name: {member.name}</Text>
                  <Text style={styles.modalText}>Birthday: {member.birthday}</Text>
                </View>
              ))}
            </ScrollView>
            <View style={styles.treeContainer} onPress={() => setFamilyTreeModalVisible(false)}>
              
            </View>
            <Pressable style={styles.closeButton} onPress={() => setFamilyTreeModalVisible(false)}>
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
    backgroundColor: '#FBFAFA'
  },
  treeImage: {
    width: 400,
    height: 300,
    justifyContent: 'center',
    alignContent: 'center'
  },
  treeContainer: {
    width: '10%',
    height: '10%'
  },
  header: {
    fontSize: 18,
    marginBottom: 20,
    color: '#002D04',
  },
  button: {
    backgroundColor: '#4CAF50',
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
    backgroundColor: '#8FBC8F',
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
    borderColor: '#6B4226',
    borderWidth: 1,
    padding: 10,
    width: 250,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#FFF8DC',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
    backgroundColor: '#6B4226',
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
    color: '#002D04',
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
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 20,
  },
  modalContent: {
    width: 600,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    height: 300,
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
  memberContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#FFF8DC',
    borderRadius: 5,
    width: 300,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  smallButton: {
    width: 150,
    marginLeft: 10,
  },
  picker: {
    height: 50,
    width: 250,
    marginBottom: 10,
  },
});