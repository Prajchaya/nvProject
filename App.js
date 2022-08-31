import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FirstPage from "./screen/FirstPage";
import SecondPage from "./screen/SecondPage";
import FirstPage2 from "./screen/FirstPage2";
import SecondPage2 from "./screen/SecondPage2";
import ThirdPage2 from "./screen/ThirdPage2";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstPage2"
        screenOptions={{
          headerStyle: { backgroundColor: "blue" },
          headerTintColor: "#ffff",
          headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
        }}
      >
        <Stack.Screen name="FirstPage2" component={FirstPage2} />
        <Stack.Screen name="SecondPage2" component={SecondPage2} />
        <Stack.Screen name="ThirdPage2" component={ThirdPage2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}