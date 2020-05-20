import React, { useState } from 'react';
import { View, List, Text, Button, StyleSheet } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return(
    <View>
      {/* <Button title='Increase' onPress={() => counter++} /> None of that! No mutating the state */} 
      <Button title='Increase' onPress={() => {setCounter(counter + 1)}} />
      <Button title='Decrease' onPress={() => {setCounter(counter - 1)}} />
      <Text>Current Count: {counter} </Text>
    </View>
  )
}

const styles = () => {
  StyleSheet({})
}

export default CounterScreen;