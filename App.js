import React from "react";
import { Text, ScrollView, StyleSheet } from "react-native"
import Square from './Square'

const App = () => {
  return (
    <ScrollView style={styles.scroller}>
    <Square color="#173F5F" />
    <Square color="#20639B"/>
    <Square color="#3caeab"/>
    <Square color="#f6d55c"/>
    <Square color="#ed5564"/>
    <Square color="lightgreen"/>
    <Square color="violet"/>
    <Square color="lightorange"/>
    <Square color="lightyellow"/>
    <Square color="lightgreen"/>
  </ScrollView>

  );
}


const styles = StyleSheet.create({
  scroller: {
    flex: 1,
    marginTop: 30
  }
})


export default App;