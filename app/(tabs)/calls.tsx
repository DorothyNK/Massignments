import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type FruitData = {
  genus: string;
  name: string;
  id: number;
  family: string;
  order: string;
  nutritions: {
    carbohydrates: number;
    protein: number;
    fat: number;
    calories: number;
    sugar: number;
  };
};

const Calls = () => {
  const [fruits, setFruits] = useState<FruitData[]>([]);

  const getSomeData = async () => {
    const response = await fetch("https://www.fruityvice.com/api/fruit/all");
    const data = await response.json();
    console.log(data);
    setFruits(data);
  };

  // console.log(fruits)

  getSomeData();

  return (
    <SafeAreaView>
      <FlatList
        data={fruits}
        keyExtractor={(fruits) => fruits.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              borderColor: "grey",
              marginLeft: 35,
              marginRight: 35,
              backgroundColor: "#b5c7b7",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              marginTop: 30,
            }}
          >
            <Text>Fruit name : {item.name}</Text>
            <Text>Fruit Family : {item.family}</Text>
            <Text>Amount of Carbohydrate:{item.nutritions.carbohydrates}</Text>
            <Text>Amount of Calories:{item.nutritions.calories}</Text>
            <Text>Fat content:{item.nutritions.fat}</Text>
            <Text>Protein Content:{item.nutritions.protein}</Text>
            <Text>Sugar content:{item.nutritions.sugar}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Calls;

const styles = StyleSheet.create({});
