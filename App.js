import { View, Text, Button } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import HomeScreen from "./screen/HomeScreen";


import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from "@react-navigation/drawer";

// function HomeScreen({navigation}){
//   return(
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Home!</Text>
//       <Button 
//         title="GO TO SETTING" 
//         onPress={()=>
//           navigation.navigate("Setting")
//         }
//       />
//     </View>
//   )
// }

function Setting({navigation}){
  return(
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Setting Screen</Text>
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
    <Tab.Navigator
     screenOptions={({route})=>({
      tabBarIcon: ({focused,color,size})=>{
        let iconName;
        if(route.name==='Home'){
          iconName = focused
          ?'ios-information-circle'
          :'ios-information-circle-outline'
        } else if(route.name==='Setting'){
          iconName = focused
          ?'ios-list-box'
          :'ios-list'
        }
        return<Ionicons name={iconName} size={size} color={color}/>
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor : 'gray',

     }
     )
    }
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Setting" component={Setting}/>

    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();
function MyDrawer(){
  return(
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name='Home' component={MyTabs}/>
      <Drawer.Screen name='Setting' component={Setting}/>
    </Drawer.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  )
}

export default App

