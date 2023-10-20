import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useSpring, animated } from "react-spring";
import HomeContent from "../constants/HomePageData";
import ProfileImages from "../lib/ProfileImage.jsx";
import ProfileInfo from "../lib/ProfileInfo";
import SocialLinks from "../lib/SocialLinks";
import Resume from "../lib/Resume";


const ProfileCard = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const {
    cardImage,
    name,
    role,
    linkedInProfileLink,
    githubProfileLink,
    email,
    emailTo,
    resumeDownloadLink,
    resumeFileName
  } = HomeContent;

  console.log(    resumeDownloadLink    )
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);

  // const fadeInProps = useSpring({
  //   opacity: isLoading ? 0 : 1,
  //   marginTop: isLoading ? -20 : 0,
  // });

  return (
    <View
      // style={[styles.container, isLoading ? styles.loading : {}]}
      style={styles.container}

      //   style={fadeInProps}
    >
      {/* {!isLoading && ( */}
      <ProfileImages imageSrc={cardImage} alt={name} />

      <ProfileInfo name={name} role={role} email={email} />
      {/* Use the SocialLinks component */}
      <SocialLinks
            linkedInProfileLink={linkedInProfileLink}
            githubProfileLink={githubProfileLink}
            emailTo={emailTo}
          />
      {/* Resume Download */}
      <Resume resumeDownloadLink={resumeDownloadLink} resumeFileName ={resumeFileName} />
      {/* )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    padding: 20,
  },
});

export default ProfileCard;
