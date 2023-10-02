import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import SensorItem from "./SensorItem";
import {
  AccelerometerSensor,
  BarometerSensor,
  DeviceMotionSensor,
  GyroscopeSensor,
  MagnetometerSensor,
  LightSensorSensor,
} from "./ExpoSensors";
import BatteryItem from "./BatteryItem";
import SystemDetails from "./SystemDetails";

let data = [
  {
    title: "Accelerometer",
    withkey: [
      { key: "x", value: 10.38408012 },
      { key: "y", value: 11.2283082 },
      { key: "z", value: 10.1820239 },
    ],
    nokey: ["hello mofo"],
  },
];

export default function SensorsList({ sensors }) {
  const renderItem = ({ item }) => {
    return <SensorItem data={item} />;
  };
  return (
    <ScrollView style={styles.listContainer}>
      <View>
        <AccelerometerSensor />
        <BarometerSensor />
        <DeviceMotionSensor />
        <GyroscopeSensor />
        <MagnetometerSensor />
        <LightSensorSensor />
        <BatteryItem />
        <SystemDetails />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: "85%",
  },
});
