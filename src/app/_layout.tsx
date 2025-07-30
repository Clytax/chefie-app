// React
import { useEffect } from "react";

// Localization
import "@/src/i18n";
// Firebase
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

// Expo
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Slot, Stack, SplashScreen } from "expo-router";

const InitialLayout = () => {
  // Fonts
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return <Slot />;
};
const RootLayout = () => {
  return <InitialLayout />;
};

export default RootLayout;
