import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Detail = () => {
  return (
    <View>
      <Ionicons name="arrow-back" onPress={() => router.back()} />
      <Text>Detail</Text>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
