import { StyleSheet } from "react-native";
import Layout from "./component/layout";
import Login from "./pages/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Register from "./pages/register";
import { NavigationContainer } from "@react-navigation/native";

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Layout style={styles.container}>
      <NavigationContainer>
        <Login />
      </NavigationContainer>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});
