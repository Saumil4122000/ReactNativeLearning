import React, { useState } from "react";
import { View, Text, StatusBar, StyleSheet, TouchableOpacity } from "react-native";


const App = () => {
  const [counter, setcounter] = useState(0)
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='yellow' barStyle="dark-content" />
      <Text style={styles.count}>{counter}</Text>
      <View style={styles.buttonStyle}>
        <TouchableOpacity onPress={() => setcounter(counter + 1)}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setcounter(0)}>
          <Text style={styles.button}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setcounter(counter - 1)}>
          <Text style={styles.button}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
  count: {
    fontSize: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 50
  },
  buttonStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    width: 300,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'black',
    fontSize: 30,
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  }
})

export default App;