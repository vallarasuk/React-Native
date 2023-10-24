import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import MarqueeText from "react-native-marquee";
import { Text, View } from "../components/Themed";

const ProfileInfo = ({ name, email, roles }) => {
  // Replace with your roles
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const roleChangeInterval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds (adjust as needed)

    return () => {
      clearInterval(roleChangeInterval);
    };
  }, []);

  return (
    <View style={styles.profileInfo}>
      <Text style={styles.name}>{name}</Text>
      <Text>
        <MarqueeText style={styles.role} duration={1000}>
          {roles[currentRoleIndex]}
        </MarqueeText>
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
