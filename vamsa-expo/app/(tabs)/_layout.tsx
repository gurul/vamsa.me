import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
<<<<<<< Updated upstream
=======
import React from 'react';
import axios from 'axios';

export default function Layout() {
  // Example function to fetch layout data from backend
  const fetchLayoutData = async () => {
    try {
      const response = await axios.get('https://vamsa/api/layout');
      console.log(response.data); // Handle the response data as needed
    } catch (error) {
      console.error(error);
    }
  };

  /*useEffect(() => {
    fetchLayoutData(); // Fetch data when the component mounts
  }, []);*/
>>>>>>> Stashed changes

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="memories"
        options={{
          title: 'Memories',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="camera" color={color} />,
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: 'Vamsa',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      
      <Tabs.Screen 
      name="profile"
      options={{
        title: 'Profile',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
      }}
    />
    </Tabs>
  );
}