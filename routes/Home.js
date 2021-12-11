import * as React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://reactjs.org/logo-og.png" }}
        style={{ width: "100%", height: 300 }}
      />
      <View style={styles.btnContainer}>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("TakeNote")}
        >
          <Text style={styles.btnText}>Take Note</Text>
        </Pressable>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("List")}
        >
          <Text style={styles.btnText}>FlatList</Text>
        </Pressable>
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("TakeNote")}
        >
          <Text style={styles.btnText}>Take Note</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    borderTopStartRadius: 1000,
    borderBottomStartRadius: 1000,
    borderTopEndRadius: 1000,
    borderBottomEndRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "steelblue",
  },
  btnContainer: {
    flex: 0.66,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Home;
