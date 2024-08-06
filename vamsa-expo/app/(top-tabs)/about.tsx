import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.header}>Our Inspiration</Text>
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

      <View style={styles.sectionContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.header}>Meet the Team</Text>
          <Text style={styles.paragraph}>
            We are a dedicated team of seven university students who have spent most of our lives here, deeply understanding the challenges of staying connected to distant family members and our heritage.
          </Text>
          <View style={styles.teamList}>
            <Text style={styles.teamMember}>- Srishti</Text>
            <Text style={styles.teamMember}>- Agastya</Text>
            <Text style={styles.teamMember}>- Guru</Text>
            <Text style={styles.teamMember}>- Rithvik</Text>
            <Text style={styles.teamMember}>- Jaysheel</Text>
            <Text style={styles.teamMember}>- Saharsh</Text>
            <Text style={styles.teamMember}>- Keshav</Text>
          </View>
          <Text style={styles.paragraph}>
            Having experienced these challenges firsthand, we developed Vamsa to bridge the gap between generations and keep our heritage alive.
          </Text>
        </View>

        <View style={styles.slideshowContainer}>
          <Swiper
            style={styles.swiper}
            showsPagination={false} // Hide pagination dots
            autoplay={true} // Auto-play slides
            autoplayTimeout={3} // Time between slides
          >
            <Image source={{ uri: 'https://via.placeholder.com/300x200' }} style={styles.slideshowImage} />
            <Image source={{ uri: 'https://via.placeholder.com/300x200' }} style={styles.slideshowImage} />
            <Image source={{ uri: 'https://via.placeholder.com/300x200' }} style={styles.slideshowImage} />
          </Swiper>
        </View>
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
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 15,
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  textContainer: {
    flex: 1,
    marginRight: 20,
  },
  teamList: {
    marginBottom: 15,
  },
  teamMember: {
    fontSize: 16,
    color: '#333',
  },
  slideshowContainer: {
    flex: 1,
    width: width * 0.5, // Adjust width as needed
    height: 200, // Adjust height as needed
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
