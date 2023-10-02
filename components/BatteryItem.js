import { useEffect, useState, useCallback } from "react";
import * as Battery from "expo-battery";
import SensorItem from "./SensorItem";

const batteryStates = {
  0: "Unknown",
  1: "Unplugged",
  2: "Plugged",
  3: "Full",
};

export default function BatteryItem() {
  const [batteryDetails, setBatteryDetails] = useState({
    title: "Battery",
    available: false,
  });

  const _subscribe = async () => {
    const isAvailable = await Battery.isAvailableAsync();
    if (!isAvailable) {
      return;
    }
    const batteryPowerDetails = await Battery.getPowerStateAsync();
    setBatteryDetails((batteryDetails) => {
      return {
        ...batteryDetails,
        withkey: [
          {
            key: "Battery level",
            value: String(batteryPowerDetails["batteryLevel"] * 100).substring(
              0,
              3
            ),
          },
          {
            key: "Batter State",
            value: batteryStates[batteryPowerDetails["batteryState"]],
          },
          {
            key: "Low Power Mode",
            value: batteryPowerDetails["lowPowerMode"] ? "Yes" : "No",
          },
        ],
        available: true,
      };
    });
  };

  useEffect(() => {
    _subscribe();
  }, []);

  return <SensorItem data={batteryDetails} />;
}
