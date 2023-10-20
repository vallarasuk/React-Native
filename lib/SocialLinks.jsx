import React from "react";
import { View, Linking, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SocialLink = ({ name, link }) => {
  const handlePress = () => {
    Linking.openURL(link);
  };

  return (
    <TouchableOpacity
      style={styles.socialLink}
      onPress={handlePress}
      accessibilityLabel={`Open ${name}`}
    >
      <Icon name={name} size={40} color="black" />
    </TouchableOpacity>
  );
};

const SocialLinks = ({ linkedInProfileLink, githubProfileLink, emailTo }) => {
  return (
    <View style={styles.socialLinksContainer}>
      <SocialLink name="linkedin" link={linkedInProfileLink} />
      <SocialLink name="github" link={githubProfileLink} />
      <SocialLink name="envelope" link={`mailto:${emailTo}`} />
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
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "lightgray",
    marginHorizontal: 10,
   
  },
});

export default SocialLinks;
