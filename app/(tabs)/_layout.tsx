import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarActiveTintColor: "purple",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          tabBarActiveTintColor: "purple",
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? "contacts" : "contacts-outline"}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          tabBarActiveTintColor: "purple",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={
                focused ? "chatbox-ellipses-sharp" : "chatbox-ellipses-outline"
              }
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="photos"
        options={{
          tabBarActiveTintColor: "purple",
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons
              name={focused ? "photo" : "photo-camera-back"}
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
