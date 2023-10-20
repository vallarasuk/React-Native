import React from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";
import { useColorScheme } from "react-native";
import Main from "./content/Main";
import PortfolioCard from "./components/ProfileCard";

const Navigation = () => {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* <PortfolioCard
          title="Otter"
          imageSrc="Demo"
          description="Otter matches parents who need care with trusted sitters in their community, on-demand."
          previewLink="https://vallarasuk.github.io/otto-landing-page/"
          githubLink="https://github.com/vallarasuk/otto-landing-page"
        /> */}
        <Main />
        <Main />
        <Main />
        <Main />
        <Main />
        <Main />
        <Main />
        <Main />
        <Main />
        <Main />
        <Main />
        <Main />
        <Main />
        <Main />
        <Main />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  content: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },

});

export default Navigation;
