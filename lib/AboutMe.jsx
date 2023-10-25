import React from "react";
import { StyleSheet } from "react-native";
import HomePageData from "./HomePageData"; // Import or adjust the path
import { Text, View } from "../components/Themed";

const AboutMe = () => {
  const { aboutTitle, aboutDescription } = HomePageData; // Assuming you have these fields in your data object

  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.aboutTitle}>{aboutTitle}</Text>
      <Text style={styles.aboutDescription}>{aboutDescription}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    backgroundColor: "#f7f7f7",
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  aboutTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0077b6",
    marginBottom: 10,
    textAlign: "center",
  },
  aboutDescription: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default AboutMe;
