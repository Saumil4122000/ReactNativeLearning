import { useFonts } from '@expo-google-fonts/josefin-sans'
import React from 'react'
import { StyleSheet, Image, StatusBar, Text, View, Button, Linking, TouchableOpacity } from 'react-native'
import { JosefinSans_100Thin, JosefinSans_700Bold,JosefinSans_400Regular } from '@expo-google-fonts/josefin-sans'
import AppLoading from 'expo-app-loading'
const App = () => {

  let [fontsLoaded] = useFonts({
    JosefinSans_100Thin,
    JosefinSans_700Bold,
    JosefinSans_400Regular
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="orange" translucent={true} />
      <View style={styles.container}>
        <Text style={styles.header}> Netflix Card</Text>


        <View style={styles.poster}>
          <Image source={require("./assets/123.jpg")} style={styles.imgStyle} />


          <View style={styles.poster__info}>
            <Text style={styles.poster__title}>All of us Dead</Text>
            <Text style={styles.poster__text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolores ipsa earum obcaecati voluptatem saepe quae eos cumque! In, ab.
            </Text>
          </View>

          <Button title="Watch Now" onPress={() =>
            Linking.openURL('https://www.netflix.com/watch/80109847')}
          />
        </View>
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
    fontFamily: 'JosefinSans_700Bold',
  },
  imgStyle: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 5
  },
  poster: {
    width: 250,
    borderWidth: 2,
    borderRadius: 8,
    alignItems: 'center',
  },
  poster__info: {
    alignItems: 'center',
    marginVertical: 20
  },
  poster__title: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: 'JosefinSans_400Regular',
  },
  poster__text: {
    color: '#999',
    paddingHorizontal: 20,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: 'JosefinSans_400Regular',
    textAlign: 'center'
  }
})