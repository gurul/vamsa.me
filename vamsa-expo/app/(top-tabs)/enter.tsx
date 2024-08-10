import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, Modal, TextInput, Image } from 'react-native';
import { useRouter } from 'expo-router';
import * as Font from 'expo-font';

const Enter = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [signUpModalVisible, setSignUpModalVisible] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [birthday, setBirthday] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    setLoginModalVisible(!loginModalVisible);
    router.push('home');
  };

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Save the sign-up data or send it to your backend
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Birthday:', birthday);
    setSignUpModalVisible(!signUpModalVisible);
    router.push('home');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
      <Image
        source={require("./images/wood.jpg")} // Replace with your image URL or local path
        style={styles.image}
      />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.title}>Welcome to Vamsa</Text>
        <View style={styles.imageContainer}>
          <Pressable style={styles.button} onPress={() => setLoginModalVisible(true)}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => setSignUpModalVisible(true)}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </Pressable>
        </View>
      </View>

      {/* Login Modal */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={loginModalVisible}
        onRequestClose={() => setLoginModalVisible(!loginModalVisible)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Login</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Email" 
              keyboardType="email-address" 
              value={email} 
              onChangeText={setEmail} 
            />
            <TextInput 
              style={styles.input} 
              placeholder="Password"
              secureTextEntry={!isPasswordVisible}
            />
            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.button, styles.modalButton]}
                onPress={handleLogin}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.modalButton]}
                onPress={() => setLoginModalVisible(!loginModalVisible)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* Sign Up Modal */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={signUpModalVisible}
        onRequestClose={() => setSignUpModalVisible(!signUpModalVisible)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sign Up</Text>
            <TextInput 
              style={styles.input} 
              placeholder="First Name" 
              value={firstName} 
              onChangeText={setFirstName} 
            />
            <TextInput 
              style={styles.input} 
              placeholder="Last Name" 
              value={lastName} 
              onChangeText={setLastName} 
            />
            <TextInput 
              style={styles.input} 
              placeholder="Email" 
              keyboardType="email-address" 
              value={email} 
              onChangeText={setEmail} 
            />
            <TextInput 
              style={styles.input} 
              placeholder="Password" 
              secureTextEntry 
              value={password} 
              onChangeText={setPassword} 
            />
            <TextInput 
              style={styles.input} 
              placeholder="Confirm Password" 
              secureTextEntry 
              value={confirmPassword} 
              onChangeText={setConfirmPassword} 
            />
            <TextInput 
              style={styles.input} 
              placeholder="Birthday (YYYY-MM-DD)" 
              value={birthday} 
              onChangeText={setBirthday} 
            />
            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.button, styles.modalButton]}
                onPress={handleSignUp}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.modalButton]}
                onPress={() => setSignUpModalVisible(!signUpModalVisible)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FBFAFA', // Light beige background
    flexDirection: 'row',
  },
  rightContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    flex: 1,
    width: 900,
    height: 900,
    resizeMode: 'cover',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    paddingHorizontal: 20,
  },
  title: {
    flex: 1,
    fontSize: 45,
    fontWeight: '700', // Bold weight for title
    //color: '#6B4226', // Brown color for title
    color: '#004d00',
    marginBottom: 16,
    marginTop: 40, // Move title down from the top a bit
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    color: '#6B4226', // Brown color for text
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#4CAF50', // Green color
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default Enter;