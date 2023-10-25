import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "../components/Themed";

const ProfileImage = ({ imageSrc, alt }) => {
  return (
    <View style={styles.profileImageContainer}>
      <TouchableOpacity
        onPress={() => {
          // Navigate to the "about" screen when the image is pressed
          // You'll need to implement navigation using React Navigation or a similar library
        }}
        style={styles.profileImageLink}
      >
        <Image
          source={require("../Assects/profileimgone.jpg")} // Use require with the correct path
          style={styles.profileImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  profileImageContainer: {
    alignItems: "center",
  },
  profileImageLink: {
    overflow: "hidden", // Clip the image to the defined shape
    borderRadius: 115, // Half of the width/height to make it a circle
  },
  profileImage: {
    width: 200,
    height: 200,
  },
});

export default ProfileImage;
