import { Stack } from "expo-router";
import React from "react";

const DetailsLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="detail" />
    </Stack>
  );
};

export default DetailsLayout;
