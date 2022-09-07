import { View, Text, Button } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

function HomeScreen({navigation}){
  return(
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
      <Button 
        title="GO TO SETTING" 
        onPress={()=>
          navigation.navigate("Setting")
        }
      />
    </View>
  )
}

function Setting({navigation}){
  return(
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
      <Button 
        title="GO TO HOME" 
        onPress={()=>
          navigation.navigate("Home")
        }
      />
    </View>
  )
}

const Tab = createBottomTabNavigator();

function MyTabs(){
  return(
   <Tab.Navigator>
     <Tab.Screen name='Home' component={HomeScreen}/>
     <Tab.Screen name='Setting' component={Setting}/>
   </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  )
}

export default App