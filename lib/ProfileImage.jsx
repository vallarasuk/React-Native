import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "../components/Themed";

const ProfileImage = ({ imageSrc, alt }) => {
  return (
    <View>
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
  profileImageLink: {
    alignItems: "center",
  },

  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
});

export default ProfileImage;
