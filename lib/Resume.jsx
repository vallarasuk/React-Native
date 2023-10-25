import React from "react";
import { TouchableOpacity, StyleSheet, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text, View } from "../components/Themed";

const Resume = ({ resumeDownloadLink }) => {
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
        <Icon name="file-pdf-o" size={24} color="white" />
        <Text style={styles.resumeButtonText}>Resume</Text>
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
    backgroundColor: "#0077b6", // You can adjust the background color
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderRadius: 30,
  },
  resumeButtonText: {
    color: "white",
    marginHorizontal: 10,
    fontWeight: "bold",
  },
});

export default Resume;
