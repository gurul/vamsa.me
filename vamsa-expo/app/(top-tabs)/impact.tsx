import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function ImpactScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        {/* Placeholder for impact image */}
        <Image
          source={require("./images/agastyafam.png")}
          style={styles.impactImage}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Connecting Gen-Z and Beyond to Their Roots</Text>
        <Text style={styles.paragraph}>
          In an era where many teenagers are losing touch with their heritage, Vamsa offers a crucial link to family history and traditions. Thousands of young people worldwide yearn to connect with their grandparents and understand their family’s past, but the distance and lack of resources often make this difficult.
        </Text>
        <Text style={styles.paragraph}>
          Vamsa provides a unique opportunity for future generations to remain deeply connected with their roots. Our platform bridges the gap between generations, allowing users to explore their heritage and family stories from anywhere in the world.
        </Text>
        <Text style={styles.paragraph}>
          Moreover, Vamsa’s digital nature eliminates the need for physical resources. Gone are the days of bulky family diaries and stacks of books. With Vamsa, you can maintain a connection to your heritage without contributing to physical waste. Stay linked to your family’s history and traditions effortlessly, no matter the distance.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  impactImage: {
    width: '100%',
    height: 400,
    borderRadius: 10,
    resizeMode: 'contain', // Ensure the image fits within the bounds
  },
  textContainer: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
});
