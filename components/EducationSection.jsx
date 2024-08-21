import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// Map icon names to FontAwesome icons
const iconMapping = {
  "graduation-icon": "graduation-cap",
  "school-icon": "university",
  // Add more mappings for additional icons
};

const EducationSection = ({ studies }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.studiesTitle}>Education</Text>
      {studies.map((study, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.cardContent}>
            <Icon name={iconMapping[study.icon]} size={30} color="#0077b6" style={styles.studyIcon} />
            <View style={styles.studyTextContainer}>
              <Text style={styles.studyTitle}>{study.title}</Text>
              <Text style={styles.studyYear}>{study.year}</Text>
              <Text style={styles.studyInstitution}>{study.institution}</Text>
              <Text style={styles.studyDescription}>{study.description}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  studiesTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0077b6",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4, // For Android shadow
    marginBottom: 15,
    padding: 15,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  studyIcon: {
    marginRight: 15,
  },
  studyTextContainer: {
    flex: 1,
  },
  studyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  studyYear: {
    fontSize: 14,
    color: "#666",
    marginVertical: 5,
  },
  studyInstitution: {
    fontSize: 16,
    color: "#333",
  },
  studyDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
});

export default EducationSection;