import { View, Text, ScrollView, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

const About = () => {
  const paragraphs = [
    "Vamsa's goal is to foster connection and community by connecting families even from miles apart.",
    "Create your family tree: Create your very own tree for your family and see your heritage mapped out across generations",
    "Add profiles: Picturize your family for yourself and future generations to see, remember, and connect with.",
    "Join Vamsa+: Our premium subscription allows you to dive deep into the history of your family and connect with members past using our very own AI Chatbot.",
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to Vamsa.</Text>
      {paragraphs.map((paragraph, index) => (
        <Text 
          key={index} 
          style={[
            styles.content, 
            index % 2 === 0 ? styles.leftAligned : styles.rightAligned
          ]}
        >
          {paragraph}
        </Text>
      ))}
      <Link href="home" asChild>
        <Pressable>
          <Text>Login/Sign Up</Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#9AAB89', // sage green color for background
  },
  title: {
    fontSize: 24,
    fontWeight: '700', // Bold weight for title
    color: '#004d40', // Dark green color for title
    marginBottom: 16,
    marginTop: 40, // Move title down from the top a bit
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    color: '#00796b', // Medium green color for text
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 16,
  },
  leftAligned: {
    textAlign: 'left',
  },
  rightAligned: {
    textAlign: 'right',
  },
});

export default About;
