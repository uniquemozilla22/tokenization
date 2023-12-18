import { StyleSheet, TextInput, View, Pressable, Text } from "react-native";

export default ({ options, button }) => {
  return (
    <View style={styles.form}>
      {Object.keys(options).map((input, index) => (
        <TextInput key={index} style={styles.input} {...options[input]} />
      ))}
      <Pressable
        style={({ pressed }) =>
          pressed ? styles.buttonPressed : styles.button
        }
        {...button}
      >
        <Text style={styles.buttonText}>{button.title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    gap: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    padding: 10,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  button: {
    borderRadius: 10,
    textAlign: "center",
    backgroundColor: "transparent",
    borderWidth: 2,
    padding: 10,
  },
  buttonPressed: {
    backgroundColor: "#2b2b2b",
    color: "white",
    borderRadius: 10,
    textAlign: "center",
    borderWidth: 2,
    padding: 10,
  },
  buttonText: {
    backgroundColor: "transparent",
    textAlign: "center",
  },
});
