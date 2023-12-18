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
        {/* <Register /> */}
        {/* <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Login" }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ title: "Register" }}
          />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator> */}
      </NavigationContainer>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});
