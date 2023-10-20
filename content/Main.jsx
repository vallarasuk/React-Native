import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mains Vallarasuk</Text>
      <Text style={styles.subtitle}>Welcome to your app!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "violet",
    padding: 20,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
  },
});

export default Main;
