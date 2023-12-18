import { StyleSheet } from "react-native";
import Layout from "./component/layout";
import Login from "./pages/Login";

export default function App() {
  return (
    <Layout style={styles.container}>
      {/* <Home /> */}
      <Login />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});
