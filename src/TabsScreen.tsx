import React from "react";
import { Alert, View, Button } from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { DataContextProvider } from "./contextProviders/dataContext";
import { styles } from "./styles";
import { ScreenA } from "./ScreenA";
import { ScreenB } from "./ScreenB";

const TabNavigator = createMaterialTopTabNavigator(
  {
    A: {
      screen: ScreenA
    },
    B: {
      screen: ScreenB
    }
  },
  {
    initialRouteName: "A",
    defaultNavigationOptions: { tabBarVisible: false }
  }
);

export const TabsScreen = props => {
  const currentIndex = props.navigation.state.index;
  const routes = props.navigation.state.routes;

  const onFirstStep = currentIndex === 0;
  const onLastStep = currentIndex >= routes.length - 1;

  const navigateNext = () => {
    if (onLastStep) return Alert.alert("There are no more steps");

    props.navigation.navigate(routes[currentIndex + 1].routeName);
  };

  const navigatePrevious = () => {
    if (onFirstStep) return props.navigation.goBack();

    props.navigation.navigate(routes[currentIndex - 1].routeName);
  };

  return (
    <DataContextProvider>
      <TabNavigator navigation={props.navigation} />

      <View style={styles.row}>
        <Button
          onPress={navigatePrevious}
          title={onFirstStep ? "Close" : "<<"}
        />
        <Button
          onPress={navigateNext}
          title={onLastStep ? "Finish" : "next step"}
        />
      </View>
    </DataContextProvider>
  );
};
// Pass the router to connect nested navigators
// see: https://github.com/react-navigation/react-navigation/issues/90
TabsScreen.router = TabNavigator.router;
