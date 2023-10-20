import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Resume = ({ resumeDownloadLink, resumeFileName }) => {
  const handleResumeDownload = () => {
    Linking.openURL(resumeDownloadLink);
  };

  return (
    <View style={styles.row}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleResumeDownload} style={styles.button}>
          <Icon name="download" size={30} color="black" />
          <Text style={styles.resumeText}>RESUME</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  resumeText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default Resume;
