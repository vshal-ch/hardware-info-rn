import { View, Text, StyleSheet, FlatList } from "react-native";

const SensorItem = ({ data }) => {
  const itemWithKey = ({ item }) => {
    return item["value"] || item["value"] == 0 ? (
      <Text>
        {item["key"]}: {item["value"].toString().substring(0, 10)}{" "}
        {data["unit"]}
      </Text>
    ) : null;
  };
  const itemWithOutKey = ({ item }) => {
    return <Text>{item}</Text>;
  };
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{data["title"]}</Text>
      {data["available"] ? (
        <>
          <FlatList data={data["withkey"]} renderItem={itemWithKey} scrollEnabled={false}/>
          <FlatList data={data["nokey"]} renderItem={itemWithOutKey} scrollEnabled={false}/>
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
    backgroundColor: "#fff",
    gap: 5,
    marginBottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SensorItem;
