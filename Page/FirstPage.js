import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React from "react";
import styles from "../components/styles";

const FirstPage = ({ navigation, route }) => {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.textTopStyle}>This is the First Page</Text>
          <Button
            title="Go To Second Page"
            onPress={() => {
              navigation.navigate("SecondPage");
            }}
          />
          <Button
            title="Go To Third Page"
            onPress={() => {
              navigation.navigate("ThirdPage");
            }}
          />
        </View>
      </View>
    </>
  );
};

export default FirstPage;

