import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
      <Button onPress={() => navigation.navigate("Tabs")} title="Open tabs" />
    </View>
  );
};
