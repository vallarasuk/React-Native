import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FooterContent = () => {
  return (
    <View style={styles.footerContainer}>
      {/* <Text style={styles.footerText}>© 2023 vallarasu k. All rights reserved.</Text> */}
      <Text style={styles.footerText}>Thank You</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    // backgroundColor: '#0077b6', // Set your desired background color
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    color: 'gray',
    fontSize: 22,
  },
});

export default FooterContent;
