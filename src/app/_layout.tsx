// React
import { useEffect, useState } from "react";

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
import { Slot, Stack, SplashScreen, useRouter, useSegments } from "expo-router";

// React Native
import { ActivityIndicator, View } from "react-native";

const InitialLayout = () => {
  const [initializing, setInitializing] = useState(true);

  // Expo Router
  const router = useRouter();
  const segments = useSegments();

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

  if (initializing)
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Welcome",
        }}
      />

      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
          title: "Login",
        }}
      />

      <Stack.Screen
        name="register"
        options={{
          headerShown: false,
          title: "Register",
        }}
      />
    </Stack>
  );
};
const RootLayout = () => {
  return <InitialLayout />;
};

export default RootLayout;
