import { View, StyleSheet, Text } from "react-native";
export default () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Guest Login</Text>
      </View>
      <View style={styles.container}>
        <Text>User Login</Text>
      </View>
      <View style={styles.container}>
        <Text>Admin Login</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    alignContent: "center",
    height: "auto",
    flexWrap: "wrap",
  },
  container: {
    padding: 10,
    color: "#2b2b2b",
    borderRadius: 5,
    height: "max-content",
    backgroundColor: "#ebc650",
  },
});
