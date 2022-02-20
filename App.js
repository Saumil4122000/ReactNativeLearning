import { StyleSheet, Text, View, StatusBar, ScrollView, Button } from 'react-native'
import React, { useState } from 'react'


export default function App() {
  const alignItemsArr = [
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline',
  ];
  const directions = ['inherit', 'ltr', 'rtl'];
  const flexdirectionArr = ['row', 'row-reverse', 'column', 'column-reverse'];
  const justifyContentArr = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'];
  const flexwrapArr = ['nowrap', 'wrap', 'wrap-reverse'];
  const [sqaures, setsqaures] = useState([<Square />, <Square />])
  const [alignItems, setalignItems] = useState(0)
  const [justifyContents, setjustifyContents] = useState(0)
  const [direction, setDirection] = useState(0);
  const [flexDirections, setflexDirections] = useState(0)
  const [wraps, setwraps] = useState(0)
  const changeSetting = (value, options, setterFunction) => {
    if (value == options.length - 1) {
      setterFunction(0);
      return;
    }
    setterFunction(value + 1);
  };

  const squaresStyleHooks = {
    alignItems: alignItemsArr[alignItems],
    justifyContent: justifyContentArr[justifyContents],
    direction: directions[direction],
    flexDirection: flexdirectionArr[flexDirections],
    flexWrap: flexwrapArr[wraps],
  }


  return (
    <View style={styles.container}>


      <View style={[styles.playZone, squaresStyleHooks]}>
        {sqaures.map(ele => ele)}
      </View>



      <ScrollView style={{ height: "50%" }}>
        <View style={styles.buttons}>

          <View style={styles.buttonView}>
            <Button title="Add Square" style={styles.btnstyle} onPress={() => { setsqaures([...sqaures, <Square />]) }} />
          </View>

          <View style={styles.buttonView}>
            <Button title="Remove Square" onPress={() => { setsqaures(sqaures.filter((v, i) => i != sqaures.length - 1)) }} />
          </View>


          <View style={styles.buttonView}>
            <Button title="Align Items" onPress={() => { changeSetting(alignItems, alignItemsArr, setalignItems) }} />
            <Text style={styles.text}>{alignItemsArr[alignItems]}</Text>

          </View>

          <View style={styles.buttonView}>
            <Button title="Justify Content" onPress={() => { changeSetting(justifyContents, justifyContentArr, setjustifyContents) }} />
            <Text style={styles.text}>{justifyContentArr[justifyContents]}</Text>
          </View>


          <View style={styles.buttonView}>
            <Button title="Change Direction" onPress={() => { changeSetting(direction, directions, setDirection) }} />
            <Text style={styles.text}>{directions[direction]}</Text>
          </View>

          <View style={styles.buttonView}>
            <Button title="Flex Direction" onPress={() => { changeSetting(flexDirections, flexdirectionArr, setflexDirections) }} />
            <Text style={styles.text}>{flexdirectionArr[flexDirections]}</Text>

          </View>

          <View style={styles.buttonView}>
            <Button title="Flex Wrap" onPress={() => { changeSetting(wraps, flexwrapArr, setwraps) }} />
            <Text style={styles.text}>{flexwrapArr[wraps]}</Text>

          </View>

        </View>

      </ScrollView>



    </View>
  )
}


// create component to generate the square of size 100 x 100
const Square = () => (
  <View style={{
    width: 80,
    height: 80,
    backgroundColor: randomHexColor(),
  }} />
);
function randomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
  },
  playZone: {
    height: '50%',
    borderWidth: 2,
    borderRadius: 10,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: "center",
    backgroundColor: '#F5F5F5',
  },
  buttonView: {
    width: '50%',
    padding: 15,
  },

  text: {
    fontSize: 19,
    textAlign: 'center',
    textTransform: "capitalize",
  },
  btnstyle: {
    fontSize: 30,
  }
})