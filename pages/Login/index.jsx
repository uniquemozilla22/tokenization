import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import From from "../../component/From";
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import LoginBackground from "../../assets/login_background.jpg";
import { LayoutContext } from "../../context/User/layout/LayoutContext";

export default () => {
  const { handleBackgroundImage } = useContext(LayoutContext);
  const [formUser, setFormUser] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    handleBackgroundImage(LoginBackground);
  }, []);

  const navigate = useNavigation();
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

  const navigateToRegisterPage = () => {
    navigate.navigate("Register");
  };

  return (
    <>
      <View style={styles.login_page}>
        <Text style={styles.heading}>Login</Text>
        <View style={styles.login_container}>
          <From options={formObject} button={buttonConfig} />
          <Pressable onPress={navigateToRegisterPage}>
            <Text style={styles.registerText}>Don't have an Account?</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  login_container: {
    backgroundColor: "#fafafa80",
    height: "auto",
    padding: 10,
    borderRadius: 10,
  },
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
  registerText: {
    textAlign: "center",
    padding: 5,
  },
});
