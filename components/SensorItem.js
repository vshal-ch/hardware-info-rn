import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';

const SensorItem = ({data}) => {
  const itemWithKey = ({item}) => {
    return item.value || item.value === 0 ? (
      <Text style={styles.darkText}>
        {item.key}: {item.value.toString().substring(0, 10)} {data.unit}
      </Text>
    ) : null;
  };
  const itemWithOutKey = ({item}) => {
    return <Text style={styles.darkText}>{item}</Text>;
  };
  return (
    <View style={styles.item}>
      <Text style={[styles.title, styles.darkText]}>{data.title}</Text>
      {data.available ? (
        <>
          <FlatList
            data={data.withkey}
            renderItem={itemWithKey}
            scrollEnabled={false}
          />
          <FlatList
            data={data.nokey}
            renderItem={itemWithOutKey}
            scrollEnabled={false}
          />
        </>
      ) : (
        <Text>Not available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    gap: 5,
    marginBottom: 20,
    color: '#333',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  darkText: {
    color: '#333',
  },
});

export default SensorItem;
