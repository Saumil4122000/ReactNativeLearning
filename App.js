import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  const arr = ["Saumil", "Shah", "Saumil", "Shah", "I", "am", "Saumil", "Shah"]
  return (
    <View>
      <FlatList
        data={arr}
        renderItem={( item ) => {
          return (
            // console.log(item)
            <Text style={styles.item}>{item.item}</Text>
          )
        }}
        
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    fontFamily: 'sans-serif-condensed',
    color: '#333',
    textAlign: 'center',
    backgroundColor: '#eee',
    marginTop: 5,
    textTransform: 'uppercase',
    
  }
})
  