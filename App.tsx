import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { HomeScreen } from "./src/HomeScreen";
import { TabsScreen } from "./src/TabsScreen";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Tabs: {
      screen: TabsScreen
    }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default createAppContainer(AppNavigator);
