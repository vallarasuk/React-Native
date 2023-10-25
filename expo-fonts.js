import { Font } from "expo";

export const loadFonts = async () => {
  await Font.loadAsync({
    Caveat: require("./assets/fonts/Caveat-Regular.ttf"), // Adjust the path
    "Caveat-Bold": require("./assets/fonts/Caveat-Bold.ttf"),
    "Caveat-Medium": require("./assets/fonts/Caveat-Medium.ttf"),
    "Caveat-Regular": require("./assets/fonts/Caveat-Regular.ttf"),
    "Caveat-SemiBold": require("./assets/fonts/Caveat-SemiBold.ttf"),
    "BungeeInline-Regular": require("./assets/fonts/BungeeInline-Regular.ttf"),
    "Pacifico-Regular": require("./assets/fonts/Pacifico-Regular.ttf"),
  });
};
