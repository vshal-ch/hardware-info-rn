import {
  Accelerometer,
  Barometer,
  DeviceMotion,
  Gyroscope,
  LightSensor,
  Magnetometer,
} from "expo-sensors";
import { useState, useEffect } from "react";
import SensorItem from "./SensorItem";

export const AccelerometerSensor = () => {
  const [values, setValues] = useState({
    title: "Accelerometer",
    available: false,
  });
  const [subscription, setSubscription] = useState(null);

  const _slow = () => Accelerometer.setUpdateInterval(300);

  const _subscribe = () => {
    _slow();
    setSubscription(Accelerometer.addListener(update));
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  const update = ({ x, y, z }) =>
    setValues((values) => {
      return {
        ...values,
        withkey: [
          { key: "x", value: x },
          { key: "y", value: y },
          { key: "z", value: z },
        ],
        available: true,
        unit: "m/s²",
      };
    });
  return <SensorItem data={values} />;
};
export const BarometerSensor = () => {
  const [values, setValues] = useState({
    title: "Barometer",
    available: false,
  });
  const [subscription, setSubscription] = useState(null);

  const _slow = () => Barometer.setUpdateInterval(300);

  const _subscribe = () => {
    _slow();
    setSubscription(Barometer.addListener(update));
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  const update = ({ pressure, relativeAltitude }) =>
    setValues((values) => {
      return {
        ...values,
        withkey: [
          { key: "Pressure", value: pressure },
          { key: "Relative Altitude", value: relativeAltitude },
        ],
        available: true,
        unit: "hpA",
      };
    });
  return <SensorItem data={values} />;
};
export const DeviceMotionSensor = () => {
  const [gravity, setGravity] = useState({
    title: "Gravity",
    available: false,
  });
  const [orientation, setOrientation] = useState({
    title: "Orientation",
    available: false,
  });
  const [subscription, setSubscription] = useState(null);

  const _slow = () => DeviceMotion.setUpdateInterval(300);

  const _subscribe = () => {
    _slow();
    setSubscription(
      DeviceMotion.addListener((data) => {
        let gravityData = data["accelerationIncludingGravity"];
        setGravity((values) => {
          return {
            ...values,
            withkey: [
              { key: "x", value: gravityData.x },
              { key: "y", value: gravityData.y },
              { key: "z", value: gravityData.z },
            ],
            available: true,
            unit: "m/s²",
          };
        });
        let orientationData = data["rotation"];
        setOrientation((values) => {
          return {
            ...values,
            withkey: [
              { key: "x", value: orientationData.alpha * 57.2958 },
              { key: "y", value: orientationData.beta * 57.2958 },
              { key: "z", value: orientationData.gamma * 57.2958 },
            ],
            available: true,
            unit: "°",
          };
        });
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);
  return (
    <>
      <SensorItem data={gravity} />
      <SensorItem data={orientation} />
    </>
  );
};
export const GyroscopeSensor = () => {
  const [values, setValues] = useState({
    title: "Gyroscope",
    available: false,
  });
  const [subscription, setSubscription] = useState(null);

  const _slow = () => Gyroscope.setUpdateInterval(300);

  const _subscribe = () => {
    _slow();
    setSubscription(Gyroscope.addListener(update));
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  const update = ({ x, y, z }) =>
    setValues((values) => {
      return {
        ...values,
        withkey: [
          { key: "x", value: x },
          { key: "y", value: y },
          { key: "z", value: z },
        ],
        available: true,
        unit: "rad/s",
      };
    });
  return <SensorItem data={values} />;
};
export const MagnetometerSensor = () => {
  const [values, setValues] = useState({
    title: "Magnetometer",
    available: false,
  });
  const [subscription, setSubscription] = useState(null);

  const _slow = () => Magnetometer.setUpdateInterval(300);

  const _subscribe = () => {
    _slow();
    setSubscription(Magnetometer.addListener(update));
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  const update = ({ x, y, z }) =>
    setValues((values) => {
      return {
        ...values,
        withkey: [
          { key: "x", value: x },
          { key: "y", value: y },
          { key: "z", value: z },
        ],
        available: true,
        unit: "μT",
      };
    });
  return <SensorItem data={values} />;
};
export const LightSensorSensor = () => {
  const [values, setValues] = useState({
    title: "LightSensor",
    available: false,
  });
  const [subscription, setSubscription] = useState(null);

  const _slow = () => LightSensor.setUpdateInterval(300);

  const _subscribe = () => {
    _slow();
    setSubscription(LightSensor.addListener(update));
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  const update = ({ illuminance }) =>
    setValues((values) => {
      return {
        ...values,
        withkey: [{ key: "Illuminance", value: illuminance }],
        available: true,
        unit: "lux",
      };
    });
  return <SensorItem data={values} />;
};
