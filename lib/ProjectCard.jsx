import React from "react";
import { Image, TouchableOpacity, StyleSheet, Linking } from "react-native";
import SkeletonPlaceholder from "react-native-shimmer-placeholder";
import { Text, View } from "../components/Themed";

const ProjectCard = ({
  title,
  description,
  gitLink,
  livePreview,
  previewImage,
}) => {
  return (
    <View style={styles.cardContainer}>
      {title ? (
        <Text style={styles.cardTitle}>{title}</Text>
      ) : (
        <SkeletonPlaceholder>
          <SkeletonPlaceholder.Item
            height={30}
            width={150}
            marginBottom={10}
            borderRadius={5}
          />
        </SkeletonPlaceholder>
      )}
      {previewImage && <Image source={previewImage} style={styles.cardImage} />}
      <View style={styles.cardBody}>
        {description ? (
          <Text style={styles.cardText}>{description}</Text>
        ) : (
          <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item
              height={60}
              marginBottom={10}
              borderRadius={5}
            />
            <SkeletonPlaceholder.Item
              height={60}
              marginBottom={10}
              borderRadius={5}
            />
            <SkeletonPlaceholder.Item
              height={60}
              marginBottom={10}
              borderRadius={5}
            />
          </SkeletonPlaceholder>
        )}
      </View>
      <View style={styles.cardFooter}>
        {gitLink && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(gitLink)}
          >
            <Text style={styles.buttonText}>GitHub</Text>
          </TouchableOpacity>
        )}
        {livePreview && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(livePreview)}
          >
            <Text style={styles.buttonText}>Live Preview</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderRadius: 5,
  },
  cardBody: {
    marginTop: 10,
  },
  cardText: {
    fontSize: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#0077b6",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ProjectCard;
