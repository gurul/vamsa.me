import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, Modal, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [signUpModalVisible, setSignUpModalVisible] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    setLoginModalVisible(!loginModalVisible);
    navigation.navigate('Home'); // Correct usage of navigation
  };

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Birthday:', birthday);
    setSignUpModalVisible(!signUpModalVisible);
    navigation.navigate('Home'); // Correct usage of navigation
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/images/react-logo.png')} style={styles.logo} />
        </Pressable>
        <View style={styles.navbar}>
          <Pressable onPress={() => navigation.navigate('Features')}>
            <Text style={styles.navbarText}>Features</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('About')}>
            <Text style={styles.navbarText}>About</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Impact')}>
            <Text style={styles.navbarText}>Impact</Text>
          </Pressable>
        </View>
        <View style={styles.navButtons}>
          <Pressable style={styles.navButton} onPress={() => setLoginModalVisible(true)}>
            <Text style={styles.navButtonText}>Login</Text>
          </Pressable>
          <Pressable style={styles.navButton} onPress={() => setSignUpModalVisible(true)}>
            <Text style={styles.navButtonText}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
      <Text style={styles.title}>Welcome to Vamsa</Text>
      {/* Add the rest of your Home component here */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F5F5DC',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbarText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#6B4226',
  },
  navButtons: {
    flexDirection: 'row',
  },
  navButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  content: {
    fontSize: 18,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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

export default Home;
