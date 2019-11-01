import React, { useContext } from "react";

import { View, Button, Text } from "react-native";

import { styles } from "./styles";
import { DataContext } from "./contextProviders/dataContext";

export const ScreenB = () => {
  const { user, setUser } = useContext(DataContext);
  const { myAge } = user;

  return (
    <View style={styles.container}>
      <Text>Is your age {myAge}!</Text>
      {myAge === 40 && <Text style={{ marginTop: 20, fontSize: 30 }}>🥳</Text>}
      {myAge > 40 && (
        <Button
          title="Nope, younger"
          onPress={() => setUser({ ...user, myAge: myAge - 5 })}
        />
      )}
    </View>
  );
};
