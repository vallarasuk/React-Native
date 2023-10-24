import React, { useEffect } from "react";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Animated, { useSharedValue, useAnimatedScrollHandler, withSpring, Easing, withSequence } from "react-native-reanimated";
import { Text , V} from "../components/Themed";

const Card = ({ cardValues }) => {
  const scrollY = useSharedValue(0);

  // Define the animation configuration
  const animationConfig = {
    damping: 2,
    stiffness: 80,
  };

  // Create an animated scroll handler
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  useEffect(() => {
    scrollY.value = withSequence(
      withSpring(0, animationConfig),
      withSpring(1, animationConfig)
    );
  }, [scrollY]);

  return (
    <ScrollView
      style={styles.cardContainer}
      onScroll={scrollHandler}
      scrollEventThrottle={16}
    >
      {cardValues.map((card, index) => (
        <TouchableOpacity key={index} onPress={card.onPress}>
          <Animated.View
            style={[
              styles.card,
              {
                opacity: scrollY.value,
                transform: [{ scale: scrollY.value }],
              },
            ]}
          >
            <Text style={styles.title}>{card.title}</Text>
            <Text style={styles.description}>{card.description}</Text>
          </Animated.View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    margin: 10,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default Card;
