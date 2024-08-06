/*import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, Modal, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

const About = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const [signUpModalVisible, setSignUpModalVisible] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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

  const paragraphs = [
    "Vamsa's goal is to foster connection and community by connecting families even from miles apart.",
    "Create your family tree: Create your very own tree for your family and see your heritage mapped out across generations.",
    "Add profiles: Picturize your family for yourself and future generations to see, remember, and connect with.",
    "Join Vamsa+: Our premium subscription allows you to dive deep into the history of your family and connect with members past using our very own AI Chatbot.",
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to Vamsa</Text>
      {paragraphs.map((paragraph, index) => (
        <Text 
          key={index} 
          style={styles.content}
        >
          {paragraph}
        </Text>
      ))}
      <Pressable style={styles.button} onPress={() => setLoginModalVisible(true)}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => setSignUpModalVisible(true)}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
      */

      {/* Login Modal */}

      /*

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
              placeholder="Username" 
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

      {/* Sign Up Modal *///}
      /*
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
    backgroundColor: '#F5F5DC', // Light beige background
  },
  title: {
    fontSize: 24,
    fontWeight: '700', // Bold weight for title
    color: '#6B4226', // Brown color for title
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

export default About;

*/

////////

/*

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
    navigation.navigate('Home');
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
    navigation.navigate('Home');
  };

  const paragraphs = [
    "Vamsa's goal is to foster connection and community by connecting families even from miles apart.",
    "Create your family tree: Create your very own tree for your family and see your heritage mapped out across generations.",
    "Add profiles: Picturize your family for yourself and future generations to see, remember, and connect with.",
    "Join Vamsa+: Our premium subscription allows you to dive deep into the history of your family and connect with members past using our very own AI Chatbot.",
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Image source={{ uri: 'your-logo-url' }} style={styles.logo} />
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
      {paragraphs.map((paragraph, index) => (
        <Text key={index} style={styles.content}>
          {paragraph}
        </Text>
      ))}

      {/* Login Modal *///}

      /*
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
              placeholder="Username"
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

      {/* Sign Up Modal *///}
      /*
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
    backgroundColor: '#F5F5DC',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
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
    fontSize: 24,
    fontWeight: '700',
    color: '#6B4226',
    marginBottom: 16,
    marginTop: 40,
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    color: '#6B4226',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
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

*/

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
