import React from "react";
import { View, Text, Linking, StyleSheet } from "react-native";

const ProfileInfo = ({ name, role, email }) => {
  return (
    <View style={styles.profileInfo}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>{role}</Text>
      <Text
        style={styles.email}
        onPress={() => Linking.openURL(`mailto:${email}`)}
      >
        {email}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileInfo: {
    alignItems: "center",
    marginTop: 20,
  },
  name: {
    // fontFamily: "Caveat", // Use the correct font family name
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  role: {
    fontSize: 18,
    marginTop: 20,
  },
  email: {
    fontSize: 24,
    marginTop: 10,
  },
});

export default ProfileInfo;
