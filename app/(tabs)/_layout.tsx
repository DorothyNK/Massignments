import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="contacts" />
      <Tabs.Screen name="chats" />
      <Tabs.Screen name="photos" />
    </Tabs>
  );
};

export default TabsLayout;
