import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function About() {
  const [editableField, setEditableField] = useState(null);
  const [name, setName] = useState("Jane Doe");
  const [age, setAge] = useState("55");
  const [height, setHeight] = useState("180 cm");
  const [gender, setGender] = useState("Female");
  const [background, setBackground] = useState("Some background information...");
  const [relationships, setRelationships] = useState("Some relationships information...");

  const handleEdit = (field) => {
    setEditableField(field);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log({ name, age, height, gender, background, relationships });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./images/user-placeholder.png")}
        style={styles.image}
      />
      <View style={styles.formContainer}>
        <View style={styles.row}>
          {editableField === 'name' ? (
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
              onBlur={() => setEditableField(null)}
            />
          ) : (
            <TouchableOpacity onPress={() => handleEdit('name')}>
              <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
          )}
          <Ionicons name="create-outline" size={24} color="black" onPress={() => handleEdit('name')} />
        </View>

        <View style={styles.row}>
          {editableField === 'age' ? (
            <TextInput
              style={styles.input}
              placeholder="Age"
              keyboardType="numeric"
              value={age}
              onChangeText={setAge}
              onBlur={() => setEditableField(null)}
            />
          ) : (
            <TouchableOpacity onPress={() => handleEdit('age')}>
              <Text style={styles.text}>{age}</Text>
            </TouchableOpacity>
          )}
          <Ionicons name="create-outline" size={24} color="black" onPress={() => handleEdit('age')} />
        </View>

        <View style={styles.row}>
          {editableField === 'height' ? (
            <TextInput
              style={styles.input}
              placeholder="Height (e.g., 180 cm)"
              value={height}
              onChangeText={setHeight}
              onBlur={() => setEditableField(null)}
            />
          ) : (
            <TouchableOpacity onPress={() => handleEdit('height')}>
              <Text style={styles.text}>{height}</Text>
            </TouchableOpacity>
          )}
          <Ionicons name="create-outline" size={24} color="black" onPress={() => handleEdit('height')} />
        </View>

        <View style={styles.row}>
          {editableField === 'gender' ? (
            <TextInput
              style={styles.input}
              placeholder="Gender"
              value={gender}
              onChangeText={setGender}
              onBlur={() => setEditableField(null)}
            />
          ) : (
            <TouchableOpacity onPress={() => handleEdit('gender')}>
              <Text style={styles.text}>{gender}</Text>
            </TouchableOpacity>
          )}
          <Ionicons name="create-outline" size={24} color="black" onPress={() => handleEdit('gender')} />
        </View>

        <View style={styles.row}>
          {editableField === 'background' ? (
            <TextInput
              style={styles.inputLarge}
              placeholder="Background Information"
              multiline
              value={background}
              onChangeText={setBackground}
              onBlur={() => setEditableField(null)}
            />
          ) : (
            <TouchableOpacity onPress={() => handleEdit('background')}>
              <Text style={styles.text}>{background}</Text>
            </TouchableOpacity>
          )}
          <Ionicons name="create-outline" size={24} color="black" onPress={() => handleEdit('background')} />
        </View>

        <View style={styles.row}>
          {editableField === 'relationships' ? (
            <TextInput
              style={styles.inputLarge}
              placeholder="Relationships"
              multiline
              value={relationships}
              onChangeText={setRelationships}
              onBlur={() => setEditableField(null)}
            />
          ) : (
            <TouchableOpacity onPress={() => handleEdit('relationships')}>
              <Text style={styles.text}>{relationships}</Text>
            </TouchableOpacity>
          )}
          <Ionicons name="create-outline" size={24} color="black" onPress={() => handleEdit('relationships')} />
        </View>

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Arrange children in a row
    alignItems: 'flex-start', // Align children at the top
    padding: 20, // Add some padding if needed
    backgroundColor: '#FBFAFA'
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  image: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    marginRight: 20, // Add margin to space the image from the text
  },
  formContainer: {
    flex: 1, // Take up remaining space
    flexDirection: 'column', // Arrange form items in a column
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 16, // Customize the text size
    marginRight: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 4,
    flex: 1,
  },
  inputLarge: {
    height: 80,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 4,
    flex: 1,
  },
});
