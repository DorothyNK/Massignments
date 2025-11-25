import { Stack } from "expo-router";
const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown:false}}>
      <Stack.Screen name="(tabs)"/>
      <Stack.Screen name="index" />
      <Stack.Screen name="welcome" />
      <Stack.Screen name="whatsaap" />
  
    </Stack>
  );
};
export default Layout;