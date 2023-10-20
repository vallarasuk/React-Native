import React from 'react';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import HomePageData from '../constants/HomePageData'; // Adjust the path

const skillsMapping = {
  'react-native-icon': 'mobile',
  'javascript-icon': 'code',
  'html-icon': 'html5',
  'css-icon': 'css3',
  'responsive-icon': 'mobile-alt',
  // Add more mappings for additional skills
};

const SkillsSection = () => {
  const { skillsTitle, skills } = HomePageData;

  return (
    <View style={styles.skillsContainer}>
      <Text style={styles.skillsTitle}>{skillsTitle}</Text>
      <View style={styles.skillsList}>
        {skills.map((skill, index) => (
          <View key={index} style={styles.skillItem}>
            <FontAwesome name={skillsMapping[skill.icon]} size={55} color="black" />
            <Text style={styles.skillName}>{skill.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  skillsContainer: {
    backgroundColor: '#f7f7f7',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  skillsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0077b6',
    marginBottom: 10,
  },
  skillsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  skillItem: {
    alignItems: 'center',
    width: '75%', // Adjust to your preference
    marginVertical: 15,
    padding:10,
    backgroundColor:"lightgray",
    borderRadius:100,
    justifyContent:"center",
  },
  skillName: {
    fontSize: 16,
    margin: 5,
    textAlign: 'center',
    color:"gray",
  },
});

export default SkillsSection;
