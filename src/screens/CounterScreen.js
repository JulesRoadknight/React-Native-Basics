import React, { useReducer } from 'react';
import { View, List, Text, Button, StyleSheet } from 'react-native';

const reducer = (state, action) => {
  return state.count + action.payload < 0 ? state: {...state, count: state.count + action.payload};
}

const CounterScreen = () => {
  
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // const { counter } = state;
  // console.log(counter);

  return(
    <View>
      <Button title='Increase' onPress={() => dispatch({ type: 'increment', payload: 1 })} />
      <Button title='Decrease' onPress={() => dispatch({ type: 'decrement', payload: -1 })} />
      <Text>Current Count: {state.count} </Text>
    </View>
  )
}

const styles = () => {
  StyleSheet({})
}

export default CounterScreen;