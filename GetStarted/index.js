import React, { useState } from "react";
import { StyleSheet, View,  FlatList, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import Header from '../components/header';
import TodoItem from "../components/todoitems";
import AddTodo from "../components/addTodo";


export default function GetStarted() {
  const [todos, setTodos] = useState([
    { text: "Buy coffee", key: "1" },
    { text: "Javascript class", key: "2" },
    { text: "Cook", key: "3" },
    { text: "Create first mobile app", key: "4" },
    { text: "Sleep for 3 hours", key: "5" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {
    if(text.length > 3) {
         setTodos((prevTodos) => {
           return [{ text: text, key: Math.random().toString() }, ...prevTodos];
         });
    } else {
      Alert.alert("OPPS!", "todo must be 3 chars long", [
        { text: "Okay" },
      ]);
    }
 
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 30,
  },
  list: {
    flex: 1,
    marginTop: 30,
    marginRight: "auto",
    marginLeft: "auto",
  },
});
