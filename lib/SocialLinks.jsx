import React from "react";
import { View, Linking, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // You can choose the icon set you prefer

const SocialLinks = ({ linkedInProfileLink, githubProfileLink, emailTo }) => {
  return (
    <View style={styles.socialLinksContainer}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Icon
            name="linkedin"
            size={30}
            color="blue"
            onPress={() => Linking.openURL(linkedInProfileLink)}
          />
        </View>
        <View style={styles.column}>
          <Icon
            name="github"
            size={30}
            color="black"
            onPress={() => Linking.openURL(githubProfileLink)}
          />
        </View>
        <View style={styles.column}>
          <Icon
            name="envelope"
            size={30}
            color="black"
            onPress={() => Linking.openURL(`mailto:${emailTo}`)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  socialLinksContainer: {
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flex: 1,
    alignItems: "center",
  },
});

export default SocialLinks;
