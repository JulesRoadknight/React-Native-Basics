import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'You', age: 30 },
    { name: 'Me', age: 31 },
    { name: 'Dupree', age: 39 },
    { name: 'Him', age: 34 },
    { name: 'Her', age: 20 },
    { name: 'Electric Bugaleur', age: 188 },
    { name: 'Thisthisthisthis', age: 76},
    { name: 'Thatthatthatthat', age: 30}
  ];

  return (
    <FlatList
      // horizontal
      // showsVerticalScrollIndicator = {false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
      return <Text style={styles.textStyle}>{ item.name } - Age { item.age }</Text>
      }}
    />
    // renderItem={(element) => {}} />
    // Element === { item: { name: 'You' }, index: 0 }
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;