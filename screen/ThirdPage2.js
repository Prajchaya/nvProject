import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React from "react";

const ThirdPage2 = ({ navigation, route }) => {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.heading}>This is the Third Page</Text>
          <Button
            title="Go To First Page"
            onPress={() => {
              navigation.navigate("FirstPage2");
            }}
          />
          <Button
            title="Go To Second Page"
            onPress={() => {
              navigation.navigate("SecondPage2");
            }}
          />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            color: "gray",
          }}
        >
        </Text>
      </View>
    </>
  );
};

export default ThirdPage2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: "center",
    marginVertical: 10,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
  },
});