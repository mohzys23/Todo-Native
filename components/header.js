import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My todo list</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: 'coral',
       paddingTop: 25, 
    },
    title: {
        color: '#fff',
        fontSize: 20,
        textTransform: 'uppercase',
        textAlign: 'center',
    }
});