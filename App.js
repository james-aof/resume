import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import myImage from "./JW.png";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.color}>
      <View style={styles.container}>
        <Image source={myImage} style={{ height: 150, width: 150 }} />
        <Text>Hello! This is James.</Text>
        <Intro name="CS" />
        <Intro name="reading CS" />
        <Intro name="doing CS" />
        <Intro name="solving CS" />
        <Intro name="breathing CS" />
        <Intro name="smashing CS" />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const Intro = (props) => {
  return (
    <View style={styles.center}>
      <Text style={{ fontSize: 20 }}>
        James is very interested in {props.name}!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  color: {
    flex: 1,
    backgroundColor: "#ffa",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#faf",
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
    textShadowColor: "yellow",
  },
});
