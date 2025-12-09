import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Detail = () => {
  const { title } = useLocalSearchParams();
  return (
    <SafeAreaView>
      <View>
        <Ionicons name="arrow-back" onPress={() => router.back()} />
        <Text>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({});
