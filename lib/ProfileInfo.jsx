import React from "react";
import { View, Text, Linking, StyleSheet } from "react-native";
import { useSharedValue, withSpring, Easing } from "react-native-reanimated";
import { useIntersectionObserver } from "react-native-intersection-observer";

const ProfileInfo = ({ name, role, email }) => {
  const translateY = useSharedValue(50);
  const isIntersecting = useIntersectionObserver({}, ([entry]) => {
    if (entry.isIntersecting) {
      translateY.value = withSpring(0, {
        damping: 2,
        stiffness: 60,
        overshootClamping: false,
        restSpeedThreshold: 0.01,
        restDisplacementThreshold: 0.01,
      });
    }
  });

  return (
    <View style={styles.profileInfo}>
      <Animated.Text style={[styles.name, { transform: [{ translateY }] }]}>
        {name}
      </Animated.Text>
      <Animated.Text style={[styles.role, { transform: [{ translateY }] }]}>
        {role}
      </Animated.Text>
      <Animated.Text
        style={[styles.email, { transform: [{ translateY }] }]}
        onPress={() => Linking.openURL(`mailto:${email}`)}
      >
        {email}
      </Animated.Text>
      <View style={styles.extraInfo} ref={isIntersecting}>
        {/* Content that will be animated when it becomes visible */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileInfo: {
    // Add styles for the container view
  },
  name: {
    // Add styles for the name text
  },
  role: {
    // Add styles for the role text
  },
  email: {
    // Add styles for the email text
  },
  extraInfo: {
    // Add styles for the extra info container
  },
});

export default ProfileInfo;
