import React from "react";
import { View, StyleSheet,  Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


export default function TodoItem({item, pressHandler}) {
    return (
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <View style={styles.item}>
          <Text style={styles.text}>{item.text}</Text>
          <MaterialIcons name="delete" size={18} color="tomato" />
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  item: {
    width: 270,
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: "dashed",
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  text: {
    color: "#fff",
  },
});