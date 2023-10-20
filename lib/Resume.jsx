import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

const Resume = ({ resumeDownloadLink, resumeFileName }) => {
  const handleResumeDownload = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0]; // Format: YYYY-MM-DD

    // Create an anchor element
    const link = document.createElement("a");
    link.href = resumeDownloadLink;
    link.target = "_blank"; // Open in a new tab/window
    link.download = `${resumeFileName}_${formattedDate}.png`; // Include resumeFileName and today's date in the file name

    // Add the anchor element to the DOM
    document.body.appendChild(link);

    // Dispatch a click event on the anchor
    link.dispatchEvent(new MouseEvent("click"));

    // Clean up: Remove the anchor element from the DOM after the click event is dispatched
    document.body.removeChild(link);
  };

  return (
    <View style={styles.resumeContainer}>
      <TouchableOpacity
        onPress={handleResumeDownload}
        style={styles.resumeButton}
      >
        <FontAwesomeIcon size={24} icon={faFileDownload} />
        <Text style={styles.resumeButtonText}>RESUME</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  resumeContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  resumeButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0077b6",
    padding: 12,
    borderRadius: 30,
  },
  resumeButtonText: {
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
  },
});

export default Resume;
