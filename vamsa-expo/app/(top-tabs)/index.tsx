import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Animated } from 'react-native';

export default function TabOneScreen() {

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value

  useEffect(() => {
    // Start the fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000, // Duration of the animation in milliseconds
      useNativeDriver: true, // Use native driver for performance
    }).start();
  }, [fadeAnim]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        {/* Placeholder for a large hero image */}
        <Animated.Image
          source={require("./images/family.png")}
          style={[styles.heroImage, { opacity: fadeAnim }]}
        />
      </View>
      <Text style={styles.introduction}>
        Vamsa's goal is to foster connection and community by connecting families even from miles apart.
      </Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Create your family tree</Text>
        <Text style={styles.sectionText}>
          Create your very own tree for your family and see your heritage mapped out across generations.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Add profiles</Text>
        <Text style={styles.sectionText}>
          Picturize your family for yourself and future generations to see, remember, and connect with.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Join Vamsa+</Text>
        <Text style={styles.sectionText}>
          Our premium subscription allows you to dive deep into the history of your family and connect with members past using our very own AI Chatbot.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Light background color
  },
  imageContainer: {
    marginBottom: 20,
  },
  heroImage: {
    width: '100%',
    height: 300, // Adjust the height as needed
    borderRadius: 10,
    resizeMode: 'contain', // Ensure the image fits within the bounds
  },
  introduction: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333', // Dark text color for readability
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#004d00', // Dark green text color
  },
  sectionText: {
    fontSize: 14,
    color: '#666', // Grey text color for secondary text
  },
});
