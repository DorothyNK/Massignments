import { Ionicons } from "@expo/vector-icons";
import Feather from '@expo/vector-icons/Feather';
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Detail = () => {
  const { title, message, image } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
    <TouchableOpacity>
      <View style={styles.header}>
        <Ionicons style={{marginTop:15,}}
          name="arrow-back"
          size={24}
          color="black"
          onPress={() => router.back()}
        />

        <Image
          source={{ uri: image.toString() }}
          style={styles.image}
        />

        <View style={styles.headerTitle}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitletext}>online</Text>
        </View>

        <View style={styles.headericon}>
          <TouchableOpacity style={styles.vidcallicon}>
           <Feather name="video" size={30} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.vidcallicon}>
           <Ionicons name="call-outline" size={27} color="black" />
          </TouchableOpacity>
        </View>
      
      </View>

    </TouchableOpacity>
      

      <View style={styles.body}>
        <Text style={styles.message}>{message}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

 
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 60,
    borderBottomWidth: 0.3,
    borderColor: "#ccc",
  
  },

  image: {
    width: 45,
    height: 43,
    borderRadius: 21,
    marginHorizontal: 10,
     marginTop: 15,

  },

  headerTitle: {
    justifyContent: "center",
    marginTop: 9,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    
  },

  subtitletext: {
    fontSize: 12,
    color: "green",
  },

  headericon: {
    flexDirection: "row",
    alignItems: "center",
  },

  vidcallicon: {
    marginLeft: 15,
    padding: 2,
    marginStart: 20,
    marginTop: 2,
    
  },

  
  body: {
    flex: 1,
    padding: 20,
  },

  message: {
    fontSize: 16,
    color: "#444",
  },
});
