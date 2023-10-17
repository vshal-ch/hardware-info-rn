import {View, StyleSheet, ScrollView} from 'react-native';
import {
  AccelerometerSensor,
  BarometerSensor,
  GravitySensor,
  OrientationSensor,
  GyroscopeSensor,
  MagnetometerSensor,
} from './ExpoSensors';
import React from 'react';

// eslint-disable-next-line no-unused-vars
let data = [
  {
    title: 'Accelerometer',
    withkey: [
      {key: 'x', value: 10.38408012},
      {key: 'y', value: 11.2283082},
      {key: 'z', value: 10.1820239},
    ],
    nokey: ['hello mofo'],
  },
];

export default function SensorsList({sensors}) {
  return (
    <ScrollView style={styles.listContainer}>
      <View>
        <AccelerometerSensor />
        <BarometerSensor />
        <GyroscopeSensor />
        <MagnetometerSensor />
        <GravitySensor />
        <OrientationSensor />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: '85%',
  },
});
