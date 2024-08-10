import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function FeaturesPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        Uncover Your Legacy.{'\n'}
        <Text style={styles.subtitle}>Go Premium and bring your family tree to life with limitless features.</Text>
      </Text>

      <View style={styles.table}>
        <View style={styles.header}>
          <Text style={styles.headerText}>What you'll get</Text>
          <View style={styles.column}>
            <Text style={styles.headerText}>Vamsa</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.headerText}>Vamsa+ ($119)</Text>
          </View>
        </View>

        {features.map((feature, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.featureTitle}>{feature.title}</Text>
            <View style={styles.column}>
              {feature.free ? (
                <Icon name="check-circle" style={styles.icon} />
              ) : (
                <Icon name="minus" style={styles.icon} />
              )}
            </View>
            <View style={styles.column}>
              {feature.paid ? (
                <Icon name="check-circle" style={styles.icon} />
              ) : (
                <Icon name="minus" style={styles.icon} />
              )}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const features = [
  { title: 'Family Trees', free: true, paid: true },
  { title: 'Friend Circles', free: true, paid: true },
  { title: 'Family/Friend Documentation', free: true, paid: true },
  { title: 'Post and React to Life Updates', free: true, paid: true },
  { title: 'Secure Data', free: true, paid: true },
  { title: 'Shared Photo Albums', free: false, paid: true },
  { title: 'Shared Calendars', free: false, paid: true },
  { title: 'View Friend’s Trees', free: false, paid: true },
  { title: 'Share Locations', free: false, paid: true },
  { title: 'Time Capsules', free: false, paid: true },
  { title: 'Integrate Medical History', free: false, paid: true },
  { title: 'Health Prediction Chatbot', free: false, paid: true },
];

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FBFAFA',
    alignItems: 'center',
  },
  title: {
    fontSize: 28, // Increased font size for the main title
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20, // Slightly smaller font size for the subtitle
    fontWeight: 'normal',
  },
  table: {
    width: '90%',
    maxWidth: 600,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#004d00',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  headerText: {
    flex: 1,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  featureTitle: {
    flex: 1,
    fontSize: 16,
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    fontSize: 20, // Increased the font size for bigger icons
    color: '#000',
  },
});