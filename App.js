import React from 'react'
import { FlatList, StyleSheet, Text, View, StatusBar,ScrollView } from 'react-native'

const App = () => {
  const arr = [
    {
      key: '1',
      name: "Saumil"
    },
    {
      key: '2',
      name: "Shah"
    },
    {
      key: '3',
      name: "Saumil"
    },
    {
      key: '4',
      name: "Shah"
    },
    {
      key: '5',
      name: "I"
    },
    {
      key: '6',
      name: "am"
    },
    {
      key: '7',
      name: "Saumil"
    },
    {
      key: '8',
      name: "Shah"
    }]
  return (
    <>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="orange" translucent={true} />
      <FlatList
        data={arr}
        style={styles.listStyle}
        keyExtractor={(item) => { return item.key }}
        horizontal={true}
        // numColumns={2}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            // console.log(item.item.name)
            <Text style={styles.item}>{item.name}</Text>)
        }}
      />
    </>
  )
}

export default App

const styles = StyleSheet.create({
  item: {
    padding: 30,
    fontSize: 40,
    backgroundColor: '#f9c2ff',
    margin: 20,
    textAlign: 'center',
    fontFamily: 'Roboto',
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
    height: 150,
  },

  listStyle: {
    marginTop: 20,
    margin:"auto"
  } 
})
