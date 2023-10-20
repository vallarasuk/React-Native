import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useSpring, animated } from 'react-spring';
import HomeContent from '../Constant/HomeContent';
import Resume from '../Helper/Resume';
import SocialLinks from '../Helper/SocialLinks';
import ProfileImage from '../Helper/ProfileImage';
import ProfileInfo from '../Helper/ProfileInfo';

const ProfileCard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const {
    cardImage,
    name,
    role,
    linkedInProfileLink,
    githubProfileLink,
    email,
    emailTo,
    resumeDownloadLink,
  } = HomeContent;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const fadeInProps = useSpring({
    opacity: isLoading ? 0 : 1,
    marginTop: isLoading ? -20 : 0,
  });

  return (
    <animated.View
      style={[styles.container, isLoading ? styles.loading : {}]}
    //   style={fadeInProps}
    >
      {isLoading && (
        <View style={styles.loadingOverlay}>
          <View style={styles.loadingSpinner}>
            <ActivityIndicator size="large" color="#007BFF" />
          </View>
        </View>
      )}
      {!isLoading && (
        <>
          <ProfileImage imageSrc={cardImage} alt={name} />

          <ProfileInfo name={name} role={role} email={email} />

          {/* Use the SocialLinks component */}
          <SocialLinks
            linkedInProfileLink={linkedInProfileLink}
            githubProfileLink={githubProfileLink}
            emailTo={emailTo}
          />
          {/* Resume Download */}
          <Resume resumeDownloadLink={resumeDownloadLink} />
        </>
      )}
    </animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    padding: 20,
    backgroundColor: 'white',
  },
  loading: {
    opacity: 0,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingSpinner: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
  },
});

export default ProfileCard;
