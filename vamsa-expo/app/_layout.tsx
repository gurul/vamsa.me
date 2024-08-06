/*import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false}}/>
    </Stack>
  );
}*/

/*

import React from 'react';
import { Slot, Stack } from 'expo-router';
import { SafeAreaView, View, StyleSheet, Image, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Layout = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
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
          <Pressable style={styles.navButton} onPress={() => navigation.navigate('Home', { screen: 'Login' })}>
            <Text style={styles.navButtonText}>Login</Text>
          </Pressable>
          <Pressable style={styles.navButton} onPress={() => navigation.navigate('Home', { screen: 'SignUp' })}>
            <Text style={styles.navButtonText}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
      <Stack.Navigator>
        <Slot />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default Layout;
*/

/*

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Features from './Features';
import About from './About';
import Impact from './Impact';

const Stack = createStackNavigator();

const Layout = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Features" component={Features} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Impact" component={Impact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;

*/

/*
import React from 'react';
import { Stack } from 'expo-router';
import CustomHeader from '../app/CustomHeader'; // Adjust the path as necessary

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        header: ({ navigation, route, options }) => (
          <CustomHeader title={options.title ?? route.name} />
        ),
      }}
    >
      <Stack.Screen name="Test1" options={{ title: 'Test1' }} />
      <Stack.Screen name="Test2" options={{ title: 'Test2' }} />
      {/* Add more screens as necessary *//*}
    </Stack>
  );
};

export default Layout;

*/

import { Stack } from "expo-router";

export default function RootLayout() {
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="(top-tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}