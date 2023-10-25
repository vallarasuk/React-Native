import React, { useEffect, useState } from "react";
import Main from "../content/Main";
import Loader from "../components/Loader";
import { StyleSheet } from "react-native";
import { View } from "../components/Themed";



const Navigation = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds (adjust as needed)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  return (

    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Main name="Root" />
        </>
      )}
    </View>



  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default Navigation;
