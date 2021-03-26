import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from "react-native";
import Button from '../Button';

export default function AddTodo({submitHandler}) {
    const [text, setText] = useState("");
   const changeHandler = (val) => {
       setText(val)
   }
    return (
       <View style={styles.wrapper}>
<TextInput 
style={styles.input}
    placeholder="new todo..."
    onChangeText={changeHandler}
/>
<Button onPress={() => submitHandler(text)} title="add todo" style={styles.btn} />
       </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginHorizontal: 'auto'
    },
  input: {
    width: 270,
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingHorizontal: 8,
    paddingVertical: 9,
    borderBottomWidth: 1,
    borderColor: "#bbb",
    fontSize: 18,
    color: "#fff",
  },
  inputPlaceholder: {
color: 'white'
  }
});
