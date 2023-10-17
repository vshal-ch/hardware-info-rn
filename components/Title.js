import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

function Title() {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Hardware Info</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'flex-start',
    paddingVertical: 16,
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 24,
    marginVertical: 0,
    color: '#111',
  },
});

export default Title;
