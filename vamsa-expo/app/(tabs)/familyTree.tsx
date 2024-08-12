import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function FamilyTree() {
  const [selectedMember, setSelectedMember] = useState(null);

  const family = [
    {
      "_id": "1",
      "name": "Saharsh Maloo",
      "dob": "2005-05-06",
      "parents": ["3", "4"],
      "children": [],
      "siblings": ["2"]
    },
    {
      "_id": "2",
      "name": "Shravya Maloo",
      "dob": "2010-06-05",
      "parents": ["3", "4"],
      "children": [],
      "siblings": ["1"]
    },
    {
      "_id": "3",
      "name": "Raghvendra Maloo",
      "dob": "1980-06-05",
      "parents": [],
      "children": ["1", "2"],
      "siblings": []
    },
    {
      "_id": "4",
      "name": "Ritu Maloo",
      "dob": "1985-06-05",
      "parents": [],
      "children": ["1", "2"],
      "siblings": []
    },
  ];

  const findMemberById = (id) => {
    return family.find(member => member._id === id)?.name || "Unknown";
  };

  const renderMember = (member) => (
    <TouchableOpacity
      key={member._id}
      style={styles.memberContainer}
      onPress={() => setSelectedMember(member)}
    >
      <View style={styles.member}>
        <Text style={styles.name}>{member.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Render parents */}
      <View style={styles.row}>
        {family.filter(member => member.children.length > 0).map(renderMember)}
      </View>

      {/* Connector lines from parents to children */}
      <View style={styles.connectorRow}>
        <View style={styles.connector}></View>
        <View style={styles.connector}></View>
      </View>

      {/* Render children */}
      <View style={styles.row}>
        {family.filter(member => member.parents.length > 0).map(renderMember)}
      </View>

      {/* Display selected member's DOB */}
      {selectedMember && (
        <View style={styles.dobContainer}>
          <Text style={styles.dobText}>
            {selectedMember.name}'s Date of Birth: {selectedMember.dob}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FBFAFA',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  memberContainer: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  member: {
    padding: 10,
    backgroundColor: '#4CAF50', // Green color
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
  },
  connectorRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  connector: {
    width: 80,
    height: 2,
    backgroundColor: '#000',
    marginHorizontal: 10,
  },
  dobContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  dobText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
