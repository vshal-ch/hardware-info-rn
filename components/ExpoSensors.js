import {
  accelerometer,
  barometer,
  gyroscope,
  magnetometer,
  gravity,
  orientation,
  setUpdateIntervalForType,
  SensorTypes,
} from 'react-native-sensors';
import {useState, useEffect, React} from 'react';
import SensorItem from './SensorItem';

setUpdateIntervalForType(SensorTypes.accelerometer, 1000);
setUpdateIntervalForType(SensorTypes.barometer, 1000);
setUpdateIntervalForType(SensorTypes.gyroscope, 1000);
setUpdateIntervalForType(SensorTypes.magnetometer, 1000);
setUpdateIntervalForType(SensorTypes.gravity, 1000);
setUpdateIntervalForType(SensorTypes.orientation, 1000);

const update = (data, setData, unit) => {
  let keys = Object.keys(data);
  let array = keys.map(k => {
    return {key: k, value: data[k]};
  });

  setData(vals => {
    return {
      ...vals,
      withkey: array,
      available: true,
      unit: unit,
    };
  });
};

export const AccelerometerSensor = () => {
  const [values, setValues] = useState({
    title: 'Accelerometer',
    available: false,
  });

  useEffect(() => {
    accelerometer.subscribe(data => {
      const {x, y, z} = data;
      if (Number.isFinite(x) && Number.isFinite(y) && Number.isFinite(z)) {
        update({x, y, z}, setValues, 'm/s²');
      } else {
        setValues({
          title: 'Accelerometer',
          available: false,
        });
      }
    });
  }, []);

  return <SensorItem data={values} />;
};

export const BarometerSensor = () => {
  const [values, setValues] = useState({
    title: 'Barometer',
    available: false,
  });

  useEffect(() => {
    barometer.subscribe(data => {
      const {pressure} = data;
      if (Number.isFinite(pressure)) {
        update({pressure}, setValues, 'hpA');
      } else {
        setValues({
          title: 'Barometer',
          available: false,
        });
      }
    });
  });
  return <SensorItem data={values} />;
};

export const GyroscopeSensor = () => {
  const [values, setValues] = useState({
    title: 'Gyroscope',
    available: false,
  });
  useEffect(() => {
    gyroscope.subscribe(data => {
      const {x, y, z} = data;
      if (Number.isFinite(x) && Number.isFinite(y) && Number.isFinite(z)) {
        update({x, y, z}, setValues, 'm/s²');
      } else {
        setValues({
          title: 'Gyroscope',
          available: false,
        });
      }
    });
  }, []);

  return <SensorItem data={values} />;
};

export const MagnetometerSensor = () => {
  const [values, setValues] = useState({
    title: 'Magnetometer',
    available: false,
  });
  useEffect(() => {
    magnetometer.subscribe(data => {
      const {x, y, z} = data;
      if (Number.isFinite(x) && Number.isFinite(y) && Number.isFinite(z)) {
        update({x, y, z}, setValues, 'm/s²');
      } else {
        setValues({
          title: 'Magnetometer',
          available: false,
        });
      }
    });
  }, []);

  return <SensorItem data={values} />;
};

export const GravitySensor = () => {
  const [values, setValues] = useState({
    title: 'Gravity',
    available: false,
  });
  useEffect(() => {
    gravity.subscribe(data => {
      const {x, y, z} = data;
      if (Number.isFinite(x) && Number.isFinite(y) && Number.isFinite(z)) {
        update({x, y, z}, setValues, 'm/s²');
      } else {
        setValues({
          title: 'Gravity',
          available: false,
        });
      }
    });
  }, []);

  return <SensorItem data={values} />;
};

export const OrientationSensor = () => {
  const [values, setValues] = useState({
    title: 'Orientation',
    available: false,
  });
  useEffect(() => {
    orientation.subscribe(data => {
      const {pitch, qw, qx, qy, qz, roll, yaws} = data;
      update({pitch, qw, qx, qy, qz, roll, yaws}, setValues, '');
    });
  }, []);

  return <SensorItem data={values} />;
};
