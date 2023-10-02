// import { useState, useEffect } from "react";
// import {
//   Accelerometer,
//   Barometer,
//   DeviceMotion,
//   Gyroscope,
//   LightSensor,
//   Magnetometer,
//   Pedometer,
// } from "expo-sensors";
// import { Platform } from "react-native";

// function getDefault() {
//   return {
//     accelerometer: {
//       title: "Accelerometer",
//       available: false,
//     },
//     barometer: {
//       title: "Barometer",
//       available: false,
//     },
//     gravity: {
//       title: "Gravity",
//       available: false,
//     },
//     orientation: {
//       title: "Orientation",
//       available: false,
//     },
//     gyroscope: {
//       title: "Gyroscope",
//       available: false,
//     },
//     lightsensor: {
//       title: "Light Sensor",
//       available: false,
//     },
//     magnetometer: {
//       title: "Magnetometer",
//       available: false,
//     },
//   };
// }

// const parameters = {
//   accelerometer: ["x", "y", "z"],
//   barometer: ["pressure", "relativeAltitude"],
//   gravity: ["x", "y", "z"],
//   orientation: ["alpha", "beta", "gamma"],
//   gyroscope: ["x", "y", "z"],
//   magnetometer: ["x", "y", "z"],
//   lightsensor: ["illuminance"],
// };

// const ALL_SENSORS = [
//   Accelerometer,
//   Barometer,
//   Gyroscope,
//   Magnetometer,
//   DeviceMotion,
//   LightSensor,
// ];

// const useAccelerometer = () => {
//   const [values, setValues] = useState(getDefault);
//   const [subscriptions, setSubscriptions] = useState([]);

//   const _slow = () => {
//     ALL_SENSORS.forEach((sensor) => {
//       sensor.setUpdateInterval(500);
//     });
//   };
//   const _fast = () => Accelerometer.setUpdateInterval(16);

//   const _subscribe = () => {
//     _slow();
//     const accelerometer = Accelerometer.addListener((data) => {
//       update("accelerometer", data);
//     });
//     const barometer = Barometer.addListener((data) => {
//       update("barometer", data);
//     });
//     const devicemotion = DeviceMotion.addListener((data) => {
      
//     });
//     const gyroscope = Gyroscope.addListener((data) => {
//       update("gyroscope", data);
//     });
//     const magnetometer = Magnetometer.addListener((data) => {
//       update("magnetometer", data);
//     });
//     let lightsensor;
//     if (Platform.OS == "android") {
//       lightsensor = LightSensor.addListener((data) => {
//         update("lightsensor", data);
//       });
//     }
//     setSubscription([
//       accelerometer,
//       barometer,
//       devicemotion,
//       gyroscope,
//       magnetometer,
//       lightsensor,
//     ]);
//   };

//   const _unsubscribe = () => {
//     subscriptions.forEach((sub) => {
//       sub && sub.remove();
//     });
//     setSubscription(null);
//   };

//   useEffect(() => {
//     _subscribe();
//     return () => _unsubscribe();
//   }, []);

//   const update = (sensor, data) => {
//     array = []
//     setValues((values) => {
//       values[sensor] = { ...values[sensor], withkey: [] };
//       return {
//         ...values,

//         withkey: [
//           { key: "x", value: x },
//           { key: "y", value: y },
//           { key: "z", value: z },
//         ],
//         available: true,
//       };
//     });
//     return values;
//   };
// };

// export default useAccelerometer;
