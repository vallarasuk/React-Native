import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const ProfileImage = ({ imageSrc, alt }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        // Navigate to the "about" screen when the image is pressed
        // You'll need to implement navigation using React Navigation or a similar library
      }}
      style={styles.profileImageLink}
    >
      <Image source={{ uri: imageSrc }} alt={alt} style={styles.profileImage} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profileImageLink: {
    // Add any styles you want for the link container
  },
  profileImage: {
    width: 100, // Adjust the width and height as needed
    height: 100,
    // Add any other styles you want for the profile image
  },
});

export default ProfileImage;
