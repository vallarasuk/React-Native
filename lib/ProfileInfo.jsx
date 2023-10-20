import React from "react";
import { View, Text, Linking, StyleSheet } from "react-native";
import { useSharedValue, withSpring, Easing } from "react-native-reanimated";
import {
  useIntersectionObserver,
  useIntersectionEffect,
} from "react-native-intersection-observer";

const ProfileInfo = ({ name, role, email }) => {
  // const translateY = useSharedValue(50);
  // const isIntersecting = useIntersectionObserver();

  // useIntersectionEffect(([entry]) => {
  //   if (entry.isIntersecting) {
  //     translateY.value = withSpring(0, {
  //       damping: 2,
  //       stiffness: 60,
  //       overshootClamping: false,
  //       restSpeedThreshold: 0.01,
  //       restDisplacementThreshold: 0.01,
  //     });
  //   }
  // }, [isIntersecting]);

  return (
    <View style={styles.profileInfo}>
      <Text style={styles.name}>{name}</Text>
      <Text style={[styles.role]}>{role}</Text>
      <Text
        style={[styles.email]}
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
    fontSize: 24,
    marginTop:20

  },
  role: {
    fontSize: 18,
    marginTop:20

  },
  email: {
    fontSize: 24,
    marginTop:10

  },
  extraInfo: {
    // Add styles for the extra info container
  },
});

export default ProfileInfo;
