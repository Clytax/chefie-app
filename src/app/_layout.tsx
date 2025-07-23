import { Slot, Stack } from "expo-router";

// Firebase
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

const InitialLayout = () => {
  return <Slot />;
};
const RootLayout = () => {
  return <InitialLayout />;
};

export default RootLayout;
