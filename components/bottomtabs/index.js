import { Image, StyleSheet } from "react-native";
import React from "react";

import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import Home from "../../views/home";

const BottomTab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "black", borderWidth: 0 },
        headerShown: false,
        tabBarActiveTintColor: "white",
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/images/home.png")}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Discover"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/images/search.png")}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="NewVideo"
        component={Home}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/images/new-video.png")}
              style={[
                styles.newVideoButton,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Inbox"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/images/message.png")}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/images/user.png")}
              style={[
                styles.bottomTabIcon,
                focused && styles.bottomTabIconFocused,
              ]}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomTabIcon: {
    width: 20,
    height: 20,
    tintColor: "grey",
  },
  bottomTabIconFocused: {
    tintColor: "white",
  },
  newVideoButton: {
    width: 50,
    height: 25,
  },
});
