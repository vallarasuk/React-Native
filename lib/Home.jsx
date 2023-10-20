import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import HomePageData from '../constants/HomePageData'; // Import or adjust the path

const Home = () => {
  const {
    projectButtonName,
    projectButtonlink,
    name,
    role,
    titleIcon,
    title,
    description,
  } = HomePageData; // Assuming you have these fields in your data object

 

  const handleNavigateToProjects = () => {
    // Implement your navigation logic here
  };

  return (
    <View style={styles.container}>
    
      <View style={styles.content}>
        <Text style={styles.title }>{title}</Text>
        <View style={styles.textContainer}>
          {description.map((paragraph, index) => (
            <Text key={index} style={styles.description}>
              {paragraph}
            </Text>
          ))}
          <TouchableOpacity
            style={styles.button}
            onPress={handleNavigateToProjects}
          >
            <Text style={styles.buttonText}>{projectButtonName}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0077b6',
  },
  textContainer: {
    marginTop: 20,
  },
  description: {
    fontSize: 19,
    lineHeight: 24,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0077b6',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    
  },
});

export default Home;
