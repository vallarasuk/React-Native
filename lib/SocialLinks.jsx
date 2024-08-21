import React, { useRef } from "react";
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  Linking,
} from "react-native"; // Add Linking here
import Icon from "react-native-vector-icons/FontAwesome";
import { View } from "../components/Themed";

const SocialLink = ({ name, link, color }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 1.2,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start(() => {
      Linking.openURL(link);
    });
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessibilityLabel={`Open ${name}`}
    >
      <Animated.View
        style={[styles.socialLink, { transform: [{ scale: scaleValue }] }]}
      >
        <Icon name={name} size={38} color={color} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const SocialLinks = ({
  linkedInProfileLink,
  githubProfileLink,
  emailTo,
  whatsappLink,
}) => {
  return (
    <View style={styles.socialLinksContainer}>
      <SocialLink name="linkedin" link={linkedInProfileLink} color="#0077B5" />
      <SocialLink name="github" link={githubProfileLink} color="#181717" />
      <SocialLink name="envelope" link={`mailto:${emailTo}`} color="#D44638" />
      <SocialLink name="whatsapp" link={whatsappLink} color="#25D366" />
    </View>
  );
};

const styles = StyleSheet.create({
  socialLinksContainer: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "center",
  },
  socialLink: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 40,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    // Shadow properties for iOS
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Offset of the shadow
    shadowOpacity: 0.3, // Opacity of the shadow
    shadowRadius: 3.84, // Blur radius of the shadow

    // Elevation for Android
    elevation: 5,
  },
});

export default SocialLinks;
