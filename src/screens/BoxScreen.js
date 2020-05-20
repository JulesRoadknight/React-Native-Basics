import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return(
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: "flex-start",
    flexDirection: "row",
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    justifyContent: "space-between",
    // alignItems: "center",
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
    // margin: 20,
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    // flex: 2,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'red',
    top: 30,
    
    // flex: 1, // makes an element take up as much space as it can proportionally. flex: 2 takes twice as much space as flex: 1
    // position: "absolute", // makes the element ignored by all others
    // top: 0, // top/bottom/left/right render after everything else, meaning elements can overlap or break boundaries
    // ...StyleSheet.absoluteFillObject // alt to pos abs and t, b, l, r 0
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'red',
    // flex: 1, // when applied to more than one element, they equally share the spare space
  }
})

export default BoxScreen;