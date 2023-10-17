import {SafeAreaView, StyleSheet, View} from 'react-native';
import Title from './components/Title';
import SensorsList from './components/SensorsList';
import React from 'react';
import Footer from './components/Footer';

export default function App() {
  // const [allSensors, setAllSensors] = useState({});
  // const expoSensors = useExpoSensors();

  // useEffect(() => {
  //   console.log(expoSensors);
  //   setAllSensors(expoSensors);
  // }, [expoSensors]);
  return (
    <SafeAreaView style={styles.flex1}>
      <View style={styles.container}>
        <Title />
        <SensorsList />
        <Footer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  flex1: {
    flex: 1,
  },
});

// https://medium.com/react-native-training/using-sensors-in-react-native-b194d0ad9167
// https://github.com/benvgroup/react-native-full-battery-status
// https://www.npmjs.com/package/react-native-device-info
