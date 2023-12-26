import { createContext, useState } from "react";
import {
  StyleSheet,
  StatusBar,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
  Text,
} from "react-native";
export const LayoutContext = createContext({
  backgroundImage: "",
});

const LayoutContextProvider = ({ style, children }) => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const isIPhone = Platform.OS === "ios";

  const initialValue = {
    os: { isIPhone },
    handleBackgroundImage: (data) => setBackgroundImage(data),
  };
  return (
    <LayoutContext.Provider value={initialValue}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <KeyboardAvoidingView
            style={isIPhone ? styles.iphone : style}
            behavior={isIPhone ? "padding" : "height"}
          >
            <StatusBar
              hidden={false}
              barStyle="default"
              showHideTransition="fade"
            />
            {children}
          </KeyboardAvoidingView>
        </ScrollView>
      </ImageBackground>
    </LayoutContext.Provider>
  );
};

export default LayoutContextProvider;

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
  },
  iphone: {
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  contentContainer: {},
});
