import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import * as Device from "expo-device";
import * as FileSystem from "expo-file-system";
import SensorItem from "./SensorItem";

const SystemDetails = () => {
  const [systemDetails, setSystemDetails] = useState({
    title: "System",
    available: false,
  });
  const [storageDetails, setStorageDetails] = useState({
    title: "Storage",
    available: false,
  });

  const units = [
    "bytes",
    "KiB",
    "MiB",
    "GiB",
    "TiB",
    "PiB",
    "EiB",
    "ZiB",
    "YiB",
  ];

  function niceBytes(x) {
    let l = 0,
      n = parseInt(x, 10) || 0;

    while (n >= 1024 && ++l) {
      n = n / 1024;
    }

    return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l];
  }

  const getSystemDetails = () => {
    const brand = Device.brand;
    const modelName = Device.modelName;
    const osName = Device.osName;
    const osVersion = Device.osVersion;
    setSystemDetails((systemDetails) => {
      return {
        ...systemDetails,
        withkey: [
          {
            key: "Manufacturer",
            value: brand,
          },
          {
            key: "Model",
            value: modelName,
          },
          {
            key: "OS",
            value: osName + " " + osVersion,
          },
        ],
        available: true,
      };
    });
  };

  const getStorageDetails = async () => {
    const totalStorage = await FileSystem.getTotalDiskCapacityAsync();
    const freeStorage = await FileSystem.getFreeDiskStorageAsync();
    setStorageDetails((storageDetails) => {
      return {
        ...storageDetails,
        withkey: [
          {
            key: "Free",
            value: niceBytes(freeStorage),
          },
          {
            key: "Total",
            value: niceBytes(totalStorage),
          },
        ],
        available: true,
      };
    });
  };

  useEffect(() => {
    getSystemDetails();
    getStorageDetails();
  }, []);
  return (
    <>
      <SensorItem data={systemDetails} />
      <SensorItem data={storageDetails} />
    </>
  );
};

export default SystemDetails;
