import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Animated, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Create an animated version of ImageBackground
const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);

export default function TabOneScreen() {

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value for content
  const bannerFadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value for banner

  useEffect(() => {
    // Start the fade-in animation for the banner and content
    Animated.parallel([
      Animated.timing(bannerFadeAnim, {
        toValue: 1,
        duration: 2000, // Duration of the animation in milliseconds
        useNativeDriver: true, // Use native driver for performance
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000, // Duration of the animation in milliseconds
        useNativeDriver: true, // Use native driver for performance
      })
    ]).start();
  }, [fadeAnim, bannerFadeAnim]);

  return (
    <ScrollView style={styles.scrollView}>
      {/* Banner Image */}
      <AnimatedImageBackground
        source={require("./images/leaves.jpg")} // Replace with your banner image path
        style={[styles.banner, { opacity: bannerFadeAnim }]} // Apply fade-in effect to banner
      >
        <View style={[styles.bannerOverlay, { opacity: 1 }]} /> {/* Semi-transparent overlay */}
        <Text style={styles.bannerText}>Vamsa</Text>
      </AnimatedImageBackground>

      <Animated.Text style={[styles.introduction, { opacity: fadeAnim }]}>
        Preserve Your Legacy.  Unite Generations.
      </Animated.Text>

      <View style={styles.iconContainer}>
        <View style={styles.iconWrapper}>
          <Image source={require("./images/1.png")} style={styles.icon} />
          <Text style={styles.iconText}>Stay Connected</Text>
          <Text>

          </Text>
        </View>
        <View style={styles.iconWrapper}>
          <Image source={require("./images/2.png")} style={styles.icon} />
          <Text style={styles.iconText}>Cherish Memories</Text>
        </View>
        <View style={styles.iconWrapper}>
          <Image source={require("./images/3.png")} style={styles.icon} />
          <Text style={styles.iconText}>Secured Data</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#FBFAFA', // Light background color
  },
  banner: {
    width: '100%',
    height: 400, // Adjust the height of the banner as needed
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
    fontSize: 175,
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 1, // Ensure text is above the overlay
  },
  introduction: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 90,
    marginTop: 40,
    color: '#333', // Dark text color for readability
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Spread out the icons
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  iconWrapper: {
    alignItems: 'center',
    marginHorizontal: 20, // Increase margin to spread out the icons
  },
  icon: {
    width: 120, // Adjust icon size as needed
    height: 120, // Adjust icon size as needed
    marginBottom: 20,
  },
  iconText: {
    fontSize: 40,
    textAlign: 'center',
    color: '#004d00', // Match your theme color
  },
});
