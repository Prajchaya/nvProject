import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FirstPage2 from "./screen/FirstPage2";
import SecondPage2 from "./screen/SecondPage2";
import ThirdPage2 from "./screen/ThirdPage2";
import FirstPage from "./Page/FirstPage";
import SecondPage from "./Page/SecondPage";
import ThirdPage from "./Page/ThirdPage";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstPage"
        screenOptions={{
          headerStyle: { backgroundColor: "blue" },
          headerTintColor: "#ffff",
          headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
        }}
      >
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="ThirdPage" component={ThirdPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}