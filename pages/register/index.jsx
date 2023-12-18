import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import From from "../../component/From";
import { useState } from "react";

export default () => {
  const [formUser, setFormUser] = useState({
    username: "",
    password: "",
    firstName: "",
    middleName: "",
    email: "",
    lastName: "",
  });
  const formObject = {
    "first name": {
      onChangeText: (value) => setFormUser({ ...formUser, firstName: value }),
    },
    "middle name": {
      onChangeText: (value) => setFormUser({ ...formUser, middleName: value }),
    },
    "last name": {
      onChangeText: (value) => setFormUser({ ...formUser, lastName: value }),
    },
    email: {
      onChangeText: (value) => setFormUser({ ...formUser, email: value }),
    },
    username: {
      onChangeText: (value) => setFormUser({ ...formUser, username: value }),
    },
    password: {
      onChangeText: (value) => setFormUser({ ...formUser, password: value }),
    },
  };
  const buttonConfig = {
    onPress: () => {
      console.log("hello");
    },
    title: "Register",
  };

  return (
    <>
      <View style={styles.login_page}>
        <Text style={styles.heading}>Register</Text>
        <View>
          <From options={formObject} button={buttonConfig} />
          <Pressable>
            <Text style={styles.loginText}>Login</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  login_page: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  loginText: {
    textAlign: "center",
    padding: 10,
  },
});
