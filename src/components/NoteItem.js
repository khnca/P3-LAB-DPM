import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoteItem = ({ note }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{note}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default NoteItem;
