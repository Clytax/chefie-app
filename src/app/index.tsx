import { Text, View } from "react-native";
import { useState } from "react";

// i18n
import { translate } from "../i18n/utils";
import { i18n, changeLanguage } from "../i18n";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
        alignItems: "center",
      }}
    ></View>
  );
}
