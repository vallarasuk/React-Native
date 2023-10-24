import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import HomePageData from "../constants/HomePageData";
// import MobileProfileCard from './Lib/MobileProfileCard';

import { Text, View } from "./Themed";
import MyWorks from "../lib/MyWorks";
import SkillsSection from "../lib/SkillsSection";
import Home from "../lib/Home";
import Card from "../lib/Cards";

const ContentSection = () => {
  const {
    iconImage,
    titleIcon,
    cardImage,
    MobileProfileImage,
    resumeDownloadLink,
    resumeFileName,
    name,
    role,
    email,
    emailTo,
    mobile,
    mobileTo,
    instagramProfileLink,
    twitterProfileLink,
    linkedInProfileLink,
    githubProfileLink,
    title,
    description,
    skillsTitle,
    skills,
    projectsData,
    studies,
    aboutTitle,
    aboutDescription,
    cardValues
  } = HomePageData; // Assuming HomePageData is imported here

  return (
    <View style={styles.container}>
      {/* Mobile Profile Card Section */}
      {/* <MobileProfileCard /> */}
      <View>
        <Card cardValues={cardValues} />
      </View>
      <View>
        <Home />
      </View>

      {/* About Section */}
      {/* <View style={styles.about}>
        <Text style={styles.aboutTitle}>{aboutTitle}</Text>
        <Text style={styles.aboutDescription}>{aboutDescription}</Text>
      </View> */}

      {/* Works Section */}
      <View style={styles.works}>
        <MyWorks projectsData={projectsData} />
      </View>

      {/* Skills Section */}
      {/* <View style={styles.skills}>
        <Text style={styles.skillsTitle}>{skillsTitle}</Text>
        <View style={styles.skillsRow}>
          {skills.map((skill, index) => (
            <View key={index} style={styles.skillContainer}>
              <Text style={styles.skillIcon}>{skill.icon}</Text>
              <Text style={styles.skillName}>{skill.name}</Text>
            </View>
          ))}
        </View>
      </View> */}
      <SkillsSection />

      {/* Studies Section */}
      <View style={styles.studies}>
        <Text style={styles.studiesTitle}>Education</Text>
        {studies.map((study, index) => (
          <View key={index} style={styles.study}>
            <Text style={styles.studyTitle}>{study.title}</Text>
            <Text style={styles.studyYear}>{study.year}</Text>
            <Text style={styles.studyInstitution}>{study.institution}</Text>
            <Text style={styles.studyDescription}>{study.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  about: {
    margin: 16,
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  aboutDescription: {
    fontSize: 16,
  },
  works: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0077b6",
    marginBottom: 10,
  },

  skills: {
    // margin: 16,
  },
  skillsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  skillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillContainer: {
    flexDirection: "column",
    alignItems: "center",
    margin: 8,
  },
  skillIcon: {
    fontSize: 24,
  },
  skillName: {
    fontSize: 16,
    marginTop: 8,
  },
  studies: {
    margin: 16,
  },
  studiesTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0077b6",
    marginBottom: 10,
  },
  study: {
    marginBottom: 16,
  },
  studyTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  studyYear: {
    fontSize: 16,
  },
  studyInstitution: {
    fontSize: 16,
  },
  studyDescription: {
    fontSize: 16,
  },
});

export default ContentSection;
