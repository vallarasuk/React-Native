import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import ProjectCard from "./ProjectCard";

const MyWorks = ({ projectsData }) => {
  return (
    <View style={styles.works}>
      <Text style={styles.worksTitle}>My Works</Text>
      <View style={styles.workListTitle}>
        {projectsData.map((project, index) => (
          <View key={index} style={styles.projectCardContainer}>
            <ProjectCard
              title={project.title}
              description={project.description}
              gitLink={project.gitLink}
              livePreview={project.livePreview}
              previewImage={project.previewImage}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  works: {
    margin: 16,
  },
  worksTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0077b6",
    marginBottom: 10,
  },
  workListTitle: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  projectCardContainer: {
    width: "100%", // You can adjust the width as needed
    margin: 8,
  },
});

export default MyWorks;
