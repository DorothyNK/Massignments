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
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? "contacts" : "contacts-outline"}
              size={20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={
                focused ? "chatbox-ellipses-sharp" : "chatbox-ellipses-outline"
              }
              size={20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="photos"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name={focused ? "photo" : "photo-camera-back"}
              size={20}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
