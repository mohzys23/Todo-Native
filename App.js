// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import GetStarted from './GetStarted';



export default function App() {
  return (
    <View style={styles.container}>
    <GetStarted />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#523249",
    fontFamily: "Roboto",
  },
});
