import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Vamsa</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.paragraph}>
          During a meaningful conversation with one of our grandfathers, we learned about the Vamsa, a familial book cherished across generations. This book holds the stories, traditions, and records of an entire lineage, preserving the essence of family heritage. Inspired by this tradition, we created our own version of the Vamsa – a digital platform designed to help you cherish memories and stay connected to your roots, no matter where you are.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>Our Mission</Text>
        <Text style={styles.paragraph}>
          We deeply appreciate how the Vamsa keeps family histories alive and offers peace of mind through accessible health records. Our goal with Vamsa is to enhance family bonds and preserve cherished memories for future generations, providing a modern solution to a timeless tradition.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.paragraph}>
          We are a dedicated team of seven university students who have spent most of our lives here, deeply understanding the challenges of staying connected to distant family members and our heritage. Having experienced these challenges firsthand, we developed Vamsa to bridge the gap between generations and keep our heritage alive.
        </Text>
      </View>

      <View style={styles.slideshowContainer}>
        <Swiper
          style={styles.swiper}
          showsPagination={false} // Hide pagination dots
          autoplay={true} // Auto-play slides
          autoplayTimeout={5} // Time between slides
        >
          <Image source={require("./images/rotate1.jpeg")} style={styles.slideshowImage} />
          <Image source={require("./images/rotate2.jpeg")} style={styles.slideshowImage} />
          <Image source={require("./images/rotate3.jpeg")} style={styles.slideshowImage} />
          <Image source={require("./images/rotate4.jpeg")} style={styles.slideshowImage} />
          <Image source={require("./images/rotate5.jpeg")} style={styles.slideshowImage} />
          <Image source={require("./images/rotate6.jpeg")} style={styles.slideshowImage} />
          <Image source={require("./images/rotate7.jpeg")} style={styles.slideshowImage} />
          <Image source={require("./images/rotate8.jpeg")} style={styles.slideshowImage} />
          <Image source={require("./images/rotate9.jpeg")} style={styles.slideshowImage} />
          <Image source={require("./images/rotate10.jpeg")} style={styles.slideshowImage} />
          <Image source={require("./images/rotate11.jpeg")} style={styles.slideshowImage} />
          <Image source={require("./images/rotate12.jpeg")} style={styles.slideshowImage} />
        </Swiper>
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
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 45,
    fontWeight: '700', // Bold weight for title
    color: '#004d00', // Brown color for title
    marginBottom: 16,
    marginTop: 10, // Move title down from the top a bit
    textAlign: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: '700', // Bold weight for title
    color: '#004d00', // Brown color for title
    marginBottom: 16,
    marginTop: 10, // Move title down from the top a bit
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 20,
    lineHeight: 20,
    color: '#333',
    marginBottom: 15,
    textAlign: 'center'
  },
  slideshowContainer: {
    width: '80%', // Adjust width as needed (e.g., 80% of screen width)
    height: 500, // Adjust height as needed
    marginTop: 20,
    alignSelf: 'center', // Center the slideshow container
  },
  swiper: {
    flex: 1,
  },
  slideshowImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20, // Optional: Add rounded corners
  },
});

