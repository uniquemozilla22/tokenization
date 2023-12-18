import {
  StyleSheet,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LayoutContextProvider from "../context/User/layout/LayoutContext";
const Layout = (props) => {
  return <LayoutContextProvider>{props.children}</LayoutContextProvider>;
};

const styles = StyleSheet.create({
  iphone: {
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  contentContainer: {
    minHeight: "100%",
  },
});

export default Layout;
