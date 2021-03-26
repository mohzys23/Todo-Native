import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title, style }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer} >
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);



const styles = StyleSheet.create({
  appButtonContainer: {
    width: 270,
    elevation: 8,
    backgroundColor: "#f4acb7",
    borderRadius: 30,
    paddingVertical: 9,
    paddingHorizontal: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  appButtonText: {
    textAlign: "center",
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default AppButton;