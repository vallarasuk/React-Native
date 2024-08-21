import React from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import HomePageData from "../constants/HomePageData"; // Adjust the path

// Define colors for each icon
const iconColors = {
  "react-native-icon": "#61DAFB", // React Native color
  "javascript-icon": "#F7DF1E",  // JavaScript color
  "html-icon": "#E34F26",        // HTML5 color
  "css-icon": "#1572B6",         // CSS3 color
  "responsive-icon": "#61DAFB",  // Responsive design color (example, same as React Native for consistency)
};

const skillsMapping = {
  "react-native-icon": "mobile",
  "javascript-icon": "code",
  "html-icon": "html5",
  "css-icon": "css3",
  "responsive-icon": "mobile",
  // Add more mappings for additional skills
};

const SkillsSection = () => {
  const { skillsTitle, skills } = HomePageData;

  return (
    <View style={styles.skillsContainer}>
      <Text style={styles.skillsTitle}>{skillsTitle}</Text>
      <View style={styles.skillsList}>
        {skills.map((skill, index) => (
          <View key={index} style={styles.skillCard}>
            <FontAwesome
              name={skillsMapping[skill.icon]}
              size={35}
              color={iconColors[skill.icon]} // Use specific color for each icon
            />
            <Text style={styles.skillName}>{skill.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  skillsContainer: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
    backgroundColor: "#f7f7f7",
    elevation: 4, // For shadow effect on Android
  },
  skillsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0077b6", // Logo color or a consistent color for the title
    marginBottom: 15,
    textAlign: "center",
  },
  skillsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  skillCard: {
    alignItems: "center",
    justifyContent: "center", // Center items vertically
    width: 160,
    height: 85, 
    margin: 10,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5, // For shadow effect on Android
  },
  skillName: {
    fontSize: 14,
    marginTop: 8,
    textAlign: "center",
    color: "#333",
  },
});

export default SkillsSection;
