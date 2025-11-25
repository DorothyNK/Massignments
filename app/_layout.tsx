import { Stack } from "expo-router";
const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="welcome" />
      <Stack.Screen name="whatsaap" />
    </Stack>
  );
};
export default RootLayout;
