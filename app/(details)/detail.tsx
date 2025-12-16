import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Detail = () => {
  const { title, message, image } = useLocalSearchParams();
  return (
    <SafeAreaView>
      <View>
        <Ionicons name="arrow-back" onPress={() => router.back()} />
        <Text>{title}</Text>
        <Text>{message}</Text>
        <Image
          style={{
            width: 200,
            height: 200,
          }}
          source={{ uri: image.toString() }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({});
