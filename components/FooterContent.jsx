import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";
import HomePageData from "../constants/HomePageData";

const FooterContent = () => {
  const { footerContentText } = HomePageData;
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>{footerContentText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    // backgroundColor: '#0077b6', // Set your desired background color
    padding: 10,
    alignItems: "center",
  },
  footerText: {
    color: "gray",
    fontSize: 14,
  },
});

export default FooterContent;
