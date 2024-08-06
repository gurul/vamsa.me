import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function FeaturesPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Features Comparison</Text>

      <View style={styles.table}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Feature</Text>
          <View style={styles.column}>
            <Text style={styles.headerText}>Free Plan</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.headerText}>Paid Plan</Text>
          </View>
        </View>

        {features.map((feature, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.featureTitle}>{feature.title}</Text>
            <View style={styles.column}>
              <Text style={styles.checkmark}>{feature.free ? '✔' : ''}</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.checkmark}>{feature.paid ? '✔' : ''}</Text>
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
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  table: {
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
  checkmark: {
    fontSize: 18,
  },
});
