import {
  StyleSheet,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
const Layout = (props) => {
  const isIPhone = Platform.OS === "ios";
  return (
    <KeyboardAvoidingView
      style={isIPhone ? styles.iphone : props.style}
      behavior={isIPhone ? "padding" : "height"}
    >
      <StatusBar hidden={false} barStyle="default" showHideTransition="fade" />
      {props.children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  iphone: {
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default Layout;
