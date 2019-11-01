import React, { useContext } from "react";

import { View, Button, Text } from "react-native";

import { styles } from "./styles";
import { DataContext } from "./contextProviders/dataContext";

export const ScreenA = () => {
  const { user, setUser } = useContext(DataContext);

  return (
    <View style={styles.container}>
      <Text>Hello {user.myName}!</Text>
      <Button
        title="My name is Henk"
        onPress={() => setUser({ ...user, myName: "Henk" })}
      />
    </View>
  );
};
