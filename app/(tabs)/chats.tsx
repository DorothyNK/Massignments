import { Colors } from "@/constants/theme";
import { chatList } from "@/data/chatlist";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Chats = () => {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.parent}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity style={{ marginHorizontal: 3 }}>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={{ marginLeft: 273.5 }}>
            <Entypo name="camera" size={18} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={{ marginLeft: 15.5 }}>
            <Ionicons name="add-circle-sharp" size={37} color="green" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: "bold",
                marginBottom: 10,
                marginTop: 5,
              }}
            >
              Chats
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "rgba(235, 231, 231, 1)",
                borderRadius: 12,
                marginRight: 22,

                paddingLeft: 3,
                padding: 3,
              }}
            >
              <EvilIcons
                name="search"
                size={24}
                color="black"
                style={{ width: 20, height: 20 }}
              />
              <TextInput
                style={{ fontSize: 17, padding: 6, fontWeight: "400" }}
                placeholder="Ask Meta AI or Search"
                placeholderTextColor="grey"
              />
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <TouchableOpacity
                style={{
                  width: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 5.5,
                  borderRadius: 25,
                  borderWidth: 0.5,
                  borderColor: "grey",
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "600",
                    marginRight: 5,
                    color: "grey",
                  }}
                >
                  {" "}
                  All
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 105,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 6,
                  borderRadius: 25,
                  borderWidth: 0.5,
                  borderColor: "grey",
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                    marginRight: 5,
                    color: "grey",
                  }}
                >
                  {" "}
                  Unread 250
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 105,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 6,
                  borderRadius: 25,
                  borderWidth: 0.5,
                  borderColor: "grey",
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                    marginRight: 5,
                    color: "grey",
                  }}
                >
                  {" "}
                  Favorites 20
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 105,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 6,
                  borderRadius: 25,
                  borderWidth: 0.5,
                  borderColor: "grey",
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "600",
                    marginRight: 5,
                    color: "grey",
                  }}
                >
                  {" "}
                  Groups 98
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                paddingHorizontal: 15,
                marginTop: 27,
              }}
            >
              <EvilIcons name="archive" size={26} color="black" />
              <Text
                style={{
                  fontSize: 16.5,
                  fontWeight: "600",
                  marginLeft: 23,
                  flex: 1,
                  color: "grey",
                  borderBottomWidth: 0.2,
                  paddingBottom: 12,
                  borderColor: "grey",
                  marginBottom: 5,
                }}
              >
                {" "}
                Archived{" "}
              </Text>

              <Text style={{ fontSize: 14, color: "grey", fontWeight: "400" }}>
                {" "}
                98
              </Text>
            </TouchableOpacity>

            {/* this is where the chat starts from.  const button = ({}) => {}   */}

            <FlatList
              scrollEnabled={false}
              contentContainerStyle={{ paddingBottom: 100 }}
              data={chatList}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() =>
                    router.push({
                      pathname: "/(details)/detail",
                      params: {
                        title: item.title,
                        message: item.message,
                        image: item.image,
                      },
                    })
                  }
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    marginRight: 10,
                  }}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      width: 57,
                      height: 53,
                      borderRadius: 30,
                      marginTop: 15,
                      marginBottom: 5,
                    }}
                  />

                  <View
                    style={{
                      marginTop: 15,
                      marginLeft: 10,
                      flex: 1,
                      borderBottomWidth: 0.2,
                      borderColor: "grey",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: "600",
                        marginBottom: 2,
                        color: item.isGroup ? Colors.green : Colors.black,
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        color: "grey",
                        fontWeight: "500",
                        marginBottom: 7,
                      }}
                    >
                      {item.message}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />

            {/* <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginRight: 10,
              }}
            >
              <Image
                source={require("../../assets/images/dp3.jpg")}
                style={{
                  width: 57,
                  height: 53,
                  borderRadius: 30,
                  marginTop: 15,
                  marginBottom: 5,
                }}
              />

              <TouchableOpacity
                style={{
                  marginTop: 15,
                  marginLeft: 10,
                  flex: 1,
                  borderBottomWidth: 0.2,
                  borderColor: "grey",
                }}
              >
                <Text
                  style={{ fontSize: 17, fontWeight: "600", marginBottom: 2 }}
                >
                  Wonderful Ramseyer
                </Text>
                <Text
                  style={{ color: "grey", fontWeight: "500", marginBottom: 7 }}
                >
                  VP Felicia: You miss you loose oo ❗❗❗
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginRight: 10,
              }}
            >
              <Image
                source={require("../../assets/images/dp7.jpg")}
                style={{
                  width: 56,
                  height: 53,
                  borderRadius: 30,
                  marginTop: 10,
                  marginBottom: 5,
                }}
              />

              <TouchableOpacity
                style={{
                  marginTop: 15,
                  marginLeft: 10,
                  flex: 1,
                  borderBottomWidth: 0.2,
                  borderColor: "grey",
                }}
              >
                <Text
                  style={{ fontSize: 17, fontWeight: "600", marginBottom: 2 }}
                >
                  {" "}
                  Makarios🤗
                </Text>
                <Text
                  style={{ color: "grey", fontWeight: "500", marginBottom: 7 }}
                >
                  {" "}
                  Any3miiiii m3ni ok33??
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginRight: 10,
              }}
            >
              <Image
                source={require("../../assets/images/dp6.jpg")}
                style={{
                  width: 57,
                  height: 53,
                  borderRadius: 30,
                  marginTop: 15,
                  marginBottom: 5,
                }}
              />

              <TouchableOpacity
                style={{
                  marginTop: 15,
                  marginLeft: 10,
                  flex: 1,
                  borderBottomWidth: 0.2,
                  borderColor: "grey",
                }}
              >
                <Text
                  style={{ fontSize: 17, fontWeight: "600", marginBottom: 2 }}
                >
                  TAF Ghana Nashnal & Rgnl
                </Text>
                <Text
                  style={{ color: "grey", fontWeight: "500", marginBottom: 7 }}
                >
                  Emmanuel: Please do well to join us for J-reach on wednesday
                  at 7:30am🙏
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginRight: 10,
              }}
            >
              <Image
                source={require("../../assets/images/dp8.jpg")}
                style={{
                  width: 57,
                  height: 53,
                  borderRadius: 30,
                  marginTop: 15,
                  marginBottom: 5,
                }}
              />

              <TouchableOpacity
                style={{
                  marginTop: 15,
                  marginLeft: 15,
                  flex: 1,
                  borderBottomWidth: 0.2,
                  borderColor: "grey",
                }}
              >
                <Text
                  style={{ fontSize: 17, fontWeight: "600", marginBottom: 2 }}
                >
                  DCIT LEVEL 400
                </Text>
                <Text
                  style={{ color: "grey", fontWeight: "500", marginBottom: 7 }}
                >
                  Val: DCIT 312 results on mis❗❗❗
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginRight: 10,
              }}
            >
              <Image
                source={require("../../assets/images/dp9.jpg")}
                style={{
                  width: 57,
                  height: 53,
                  borderRadius: 30,
                  marginTop: 15,
                  marginBottom: 5,
                }}
              />

              <TouchableOpacity
                style={{
                  marginTop: 15,
                  marginLeft: 15,
                  flex: 1,
                  borderBottomWidth: 0.2,
                  borderColor: "grey",
                }}
              >
                <Text
                  style={{ fontSize: 17, fontWeight: "600", marginBottom: 2 }}
                >
                  Deron Odei😊
                </Text>
                <Text
                  style={{ color: "grey", fontWeight: "500", marginBottom: 7 }}
                >
                  {" "}
                  How are youuuu?
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginRight: 10,
              }}
            >
              <Image
                source={require("../../assets/images/dp4.jpg")}
                style={{
                  width: 57,
                  height: 53,
                  borderRadius: 30,
                  marginTop: 15,
                  marginBottom: 5,
                }}
              />

              <TouchableOpacity
                style={{
                  marginTop: 15,
                  marginLeft: 15,
                  flex: 1,
                  borderBottomWidth: 0.2,
                  borderColor: "grey",
                }}
              >
                <Text
                  style={{ fontSize: 17, fontWeight: "600", marginBottom: 2 }}
                >
                  XCESS GRACEE
                </Text>
                <Text
                  style={{ color: "grey", fontWeight: "500", marginBottom: 7 }}
                >
                  GodsPraise: Hey Fam👋,Kindly join today's prayer meeting via
                  the link above
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginRight: 10,
              }}
            >
              <Image
                source={require("../../assets/images/dp10.jpg")}
                style={{
                  width: 57,
                  height: 53,
                  borderRadius: 30,
                  marginTop: 15,
                  marginBottom: 5,
                }}
              />

              <TouchableOpacity
                style={{
                  marginTop: 15,
                  marginLeft: 15,
                  flex: 1,
                  borderBottomWidth: 0.2,
                  borderColor: "grey",
                }}
              >
                <Text
                  style={{ fontSize: 17, fontWeight: "600", marginBottom: 2 }}
                >
                  Revised Ladies Caucus
                </Text>
                <Text
                  style={{ color: "grey", fontWeight: "500", marginBottom: 7 }}
                >
                  Sta Abii: The monday is elegantly sophisticated❤️️
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginRight: 10,
              }}
            >
              <Image
                source={require("../../assets/images/dp2.png")}
                style={{
                  width: 57,
                  height: 53,
                  borderRadius: 30,
                  marginTop: 15,
                  marginBottom: 5,
                }}
              />

              <TouchableOpacity
                style={{
                  marginTop: 15,
                  marginLeft: 15,
                  flex: 1,
                  borderBottomWidth: 0.2,
                  borderColor: "grey",
                }}
              >
                <Text
                  style={{ fontSize: 17, fontWeight: "600", marginBottom: 2 }}
                >
                  Claudiaaa✨
                </Text>
                <Text
                  style={{ color: "grey", fontWeight: "500", marginBottom: 7 }}
                >
                  Happy birthdayyyy girlll
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginRight: 10,
              }}
            >
              <Image
                source={require("../../assets/images/dp11.png")}
                style={{
                  width: 57,
                  height: 53,
                  borderRadius: 30,
                  marginTop: 15,
                  marginBottom: 5,
                }}
              />

              <TouchableOpacity
                style={{
                  marginTop: 15,
                  marginLeft: 15,
                  flex: 1,
                  borderBottomWidth: 0.2,
                  borderColor: "grey",
                }}
              >
                <Text
                  style={{ fontSize: 17, fontWeight: "600", marginBottom: 2 }}
                >
                  Kurtiz Agyeman
                </Text>
                <Text
                  style={{ color: "grey", fontWeight: "500", marginBottom: 7 }}
                >
                  God bless you Kurtizz🙏
                </Text>
              </TouchableOpacity>
            </View> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Chats;

const styles = StyleSheet.create({
  parent: {
    marginTop: 26,
    paddingLeft: 20,
  },
});
