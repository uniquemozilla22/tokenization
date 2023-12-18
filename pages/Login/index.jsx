import { View, Text, StyleSheet, ImageBackground } from "react-native";
import From from "../../component/From";
import { useState } from "react";

export default () => {
  const [formUser, setFormUser] = useState({
    username: "",
    password: "",
  });
  const formObject = {
    username: {
      onChangeText: (value) => setFormUser({ ...formUser, username: value }),
      placeholder: "username",
    },
    password: {
      onChangeText: (value) => setFormUser({ ...formUser, password: value }),
      placeholder: "password",
    },
  };
  const buttonConfig = {
    onPress: () => {
      console.log("hello");
    },
    title: "Login",
  };

  return (
    <ImageBackground
      source={
        "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2017/12/Animated-Particles-Background.png?fit=499%2C386&ssl=1"
      }
      resizeMode="cover"
    >
      <View style={styles.login_page}>
        <Text style={styles.heading}>Login</Text>
        <From options={formObject} button={buttonConfig} />
      </View>
    </ImageBackground>
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
});
