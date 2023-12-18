import { StyleSheet, View } from "react-native";

const Layout = (props) => {
  return <View style={styles.iphone}>{props.children}</View>;
};

const styles = StyleSheet.create({
  iphone: {
    marginTop: 100,
  },
});

export default Layout;
