import React from "react";
import { TouchableOpacity, StyleSheet, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text, View } from "../components/Themed";

const Resume = (resumeDownloadLink) => {
  const handleResumeDownload = async () => {
    try {
      const supported = await Linking.canOpenURL(resumeDownloadLink);
      if (supported) {
        await Linking.openURL(resumeDownloadLink);
      } else {
        console.error(`Unable to open URL: ${resumeDownloadLink}`);
      }
    } catch (error) {
      console.error("Error opening URL: ", error);
    }
  };

  return (
    <View style={styles.resumeContainer}>
      <TouchableOpacity
        onPress={handleResumeDownload}
        style={styles.resumeButton}
      >
        <Icon name="file-pdf-o" size={24} color="#ffffff" />
        <Text style={styles.resumeButtonText}>Download Resume</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  resumeContainer: {
    alignItems: "center",
    marginTop: 25,
  },
  resumeButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0077b6", // Main background color
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5, // For shadow effect on Android
  },
  resumeButtonText: {
    color: "#ffffff",
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
  },
});

export default Resume;
