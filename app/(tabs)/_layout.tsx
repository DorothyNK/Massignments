import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false}}>
      <Tabs.Screen name="updates" />
      <Tabs.Screen name="calls" />
      <Tabs.Screen name="communities" />
      <Tabs.Screen name="chats" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}
