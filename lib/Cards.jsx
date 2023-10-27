import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View, useThemeColor } from "../components/Themed";


const Card = ({ cardValues }) => {
  const cardBackgroundColor = useThemeColor(
    { light: "#fff", dark: "black" }, // Replace "darkBackgroundColor" with your dark background color
    "background"
  );

  return (
    <View>
      {cardValues.map((card, index) => (
        <TouchableOpacity key={index} onPress={card.onPress}>
          <View style={[styles.card, { backgroundColor: cardBackgroundColor }]}>
            <Text style={styles.title}>{card.title}</Text>
            <Text style={styles.description}>{card.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    marginBottom: 10,
  },
  card: {
    borderRadius: 10,
    padding: 16,
    margin: 5, // Adjust margin as needed
    elevation: 3,
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default Card;
