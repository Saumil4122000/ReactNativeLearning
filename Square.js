import React from 'react'
import { View, StyleSheet, Text, Alert } from 'react-native'


const Square = (props) => {
  const createAlert = () =>
    Alert.alert("Alert Created", `Square color of ${props.color} is touched`,
      [
        {
          text: "cancel",
          onPress: () => console.log("Cancel is pressed")
        },
        {
          text: "ok",
          onPress: () => console.log("ok is pressed")
        }
      ]);

  return (
    <View>
      <View style={[styles.square, { backgroundColor: props.color }]} onTouchEndCapture={createAlert}></View>
    </View>
  )
}


const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginLeft: 150,
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1
  }
})
export default Square