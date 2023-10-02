import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Title from "./components/Title";
import SensorsList from "./components/SensorsList";
import { useEffect, useState } from "react";
import useExpoSensors from "./helpers/useAccelerometer";

export default function App() {
  // const [allSensors, setAllSensors] = useState({});
  // const expoSensors = useExpoSensors();

  // useEffect(() => {
  //   console.log(expoSensors);
  //   setAllSensors(expoSensors);
  // }, [expoSensors]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Title />
        <SensorsList />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
});

// https://medium.com/react-native-training/using-sensors-in-react-native-b194d0ad9167
// https://github.com/benvgroup/react-native-full-battery-status
// https://www.npmjs.com/package/react-native-device-info
