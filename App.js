import React from 'react'
import { FlatList, StyleSheet, Image, StatusBar, Text, View, ToastAndroid, TouchableOpacity, Alert, Platform } from 'react-native'

const App = () => {
  const arr = [
    {
      key: '1',
      uri: require("./assets/images/1.png")
    },
    {
      key: '2',
      uri: require("./assets/images/2.png"),

    },
    {
      key: '3',
      uri: require("./assets/images/3.png"),

    },
    {
      key: '4',
      uri: require("./assets/images/4.png"),

    },
    {
      key: '5',
      uri: require("./assets/images/5.png"),
    },
    {
      key: '6',
      uri: require("./assets/images/1.png")
    },
    {
      key: '7',
      uri: require("./assets/images/2.png"),

    },
    {
      key: '8',
      uri: require("./assets/images/3.png"),

    },
    {
      key: '9',
      uri: require("./assets/images/4.png"),

    },
    {
      key: '10',
      uri: require("./assets/images/5.png"),
    }
  ]



  return (
    <>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="orange" translucent={true} />
      <View style={styles.container}>
        <FlatList
          data={arr}
          // contentContainerStyle={styles.listStyle}
          keyExtractor={(item) => { return item.key }}
          horizontal={true}
          // numColumns={3}
          // style={{ flex: 1 }}
          // inverted={true}
          showsHorizontalScrollIndicator={false}
          // showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={styles.imagecard}

              onMouseOver={() => { Platform.OS === "web" ?
              
              alert(item.key) : console.log("HI") }}

                onTouchEnd={() => {
                  Platform.OS === "android" ? ToastAndroid.show(item.key, ToastAndroid.SHORT) : Alert.alert(item.key)
                }}>
                <Image source={item.uri} style={styles.imageStyle} />
              </View>
            )
          }}
        />
      </View>

      <TouchableOpacity onPress={() => {
        Platform.OS === 'android' ? Alert.alert("Alert") : alert("Alert")
      }}
        style={{ position: "absolute", bottom: 10, left: 150 }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Click Me</Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  imageStyle: {
    width: 150,
    height: 150,
    marginTop: 30,
    // marginVertical: "auto",
  },
  container: {
    flex: 1,
    paddingTop: 22,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imagecard: {
    height: 230,
    borderWidth: 1,
    marginRight: 20,
    marginLeft: 3,
    marginTop: 40,
    backgroundColor: 'transparent',
    borderRadius: 9,
    // alignSelf:'flex-start',
    backgroundColor: 'lightgrey',
  },
  listStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'skyblue',
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: "red",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif-medium",
    fontWeight: "bold",
    marginTop: 20
  }
})

