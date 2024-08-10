import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';

export default function ImpactScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Banner Image */}
      <ImageBackground
        source={require("./images/leaves2.jpg")} // Replace with your banner image path
        style={styles.banner}
      >
        <View style={[styles.bannerOverlay, { opacity: 1 }]} /> {/* Semi-transparent overlay */}
        <Text style={styles.bannerText}>Fostering connection and community by connecting families.</Text>
      </ImageBackground>
      
      <Text style={styles.titleText}>Connecting Gen-Z and Beyond to Their Roots</Text>
      <View style={styles.contentContainer}>
        <Image
          source={require("./images/agastyafam.png")} // Replace with your image path
          style={styles.impactImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.paragraph}></Text>
          <Text style={styles.paragraph}></Text>
          <Text style={styles.paragraph}></Text>
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FBFAFA',
  },
  banner: {
    width: '100%',
    height: 250, // Adjust the height of the banner as needed
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Ensure the banner image does not overflow
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
  },
  bannerText: {
    color: '#FFF', // White text color for contrast
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 1, // Ensure text is above the overlay
  },
  titleText: {
    color: '#000', // Black text color for contrast
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20, // Margin above and below the text
    marginBottom: -80
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start', // Align items to the start of the container
    marginVertical: 20,
  },
  impactImage: {
    width: 500, // Keep the width of the image as needed
    height: 500, // Keep the height of the image as needed
    borderRadius: 10,
    resizeMode: 'contain', // Ensure the image fits within the bounds
    marginRight: 20, // Space between the image and the text
  },
  textContainer: {
    flex: 1,
  },
  paragraph: {
    fontSize: 20,
    lineHeight: 24,
    marginBottom: 15,
    marginTop: 10,
    textAlign: 'left',
    color: '#333',
  },
});