import React from "react";
import { Text as DefaultText, useColorScheme, View as DefaultView } from "react-native";
import Colors from "../constants/Colors";

export const useThemeColor = (props, colorName) => {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  return colorFromProps ? colorFromProps : Colors[theme][colorName];
};

export const Text = (props) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
};

export const View = (props) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};
