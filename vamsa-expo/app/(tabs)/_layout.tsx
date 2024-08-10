import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'green',
      headerShown: false
    }}>
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