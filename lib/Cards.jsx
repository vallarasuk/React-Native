import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, useThemeColor } from "../components/Themed";

const Card = ({ cardValues }) => {
  const cardBackgroundColor = useThemeColor(
    { light: "#ffffff", dark: "#333333" },
    "background"
  );

  return (
    <View style={styles.cardContainer}>
      {cardValues.map((card, index) => (
        <TouchableOpacity
          key={index}
          onPress={card.onPress}
          style={styles.touchable}
          activeOpacity={0.8}
        >
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
    marginBottom: 20,
  },
  card: {
    borderRadius: 12,
    padding: 20,
    margin: 10,
    elevation: 5,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  touchable: {
    borderRadius: 12,
    overflow: "hidden",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginTop: 8,
  },
});

export default Card;
