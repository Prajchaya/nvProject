// import {StyleSheet, Text, View, ActivityIndicator, FlatList, Image,} from "react-native";
// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   const getArticles = async () => {
//     try {
//       const response = await fetch(
//         "https://newsapi.org/v2/top-headlines?country=th&apiKey=ab0d4aca4cea481e8157d31c68eb2b23"
//       );
//       const json = await response.json();
//       setData(json.articles);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getArticles();
//   }, []);

//   const _renderItem = ({ item }) => {
//     let urlToImage =
//       item.urlToImage !== null
//         ? item.urlToImage
//         : "https://via.placeholder.com/150";
//     return (
//       <View style={{ flex: 1 }}>
//         <View style={{ flex: 1, flexDirection: "row", margin: 5 }}>
//           <Image 
//             resizeMode='cover'
//             source={{uri:urlToImage}}
//             style = {{flex:1,width:'100%',height:'100%'}}
//           />
//           <View style={{width:200,margin:5}}>
//             <Text style={{fontSize:14, marginBottom:5}}>{item.title}</Text>
//             <Text style={{fontSize:10}}>{item.source.name}</Text>
//             <Text style={{fontSize:10}}>{item.source.name}</Text>
//           </View>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={{ flex: 1, padding: 20 }}>
//       {isLoading 
//       ? <ActivityIndicator size = "large" color = "#0000ff"/> 
//       : (
//         <FlatList 
//           data = {data}
//           keyExtractor = {item => item.title}
//           renderItem = {_renderItem}
//           />
//           )}
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});

import { StyleSheet, Text, View, Button, Image, SafeAreaView} from "react-native";
import React from "react";
import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";
import DetailScreen from "./screen/DetailScreen";

import { NavigationContainer,DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from "@react-navigation/drawer";
 
const MyTheme = {
  ...DefaultTheme, 
  colors:{
    ...DefaultTheme.colors,
    primary:'rgb(255,45,85)'
  }

}

function CustomDrawerContent(props){
  return(
    <SafeAreaView style = {{flex : 1}}>
      <Image style={styles.sideMenuProfileIcon}
      source={require("./assets/react_logo.png")}
      />
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
      <DrawerItem 
        label='Close drawer' 
        onPress={()=> props.navigation.closeDrawer()} 
      />
      
    </DrawerContentScrollView>
    </SafeAreaView>
  )
}
const Drawer = createDrawerNavigator();


function MyDrawer(){
  return(
    <Drawer.Navigator 
    useLegacyImplementation
    drawerContent={(props)=><CustomDrawerContent {...props}/>}
    screenOptions={{
      drawerStyle:{
        backgroundColor: 'white',
        width:240
      }
    }}
    >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Product" component={ProductScreen} />
        <Drawer.Screen name="Detail" component={DetailScreen} />
      </Drawer.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyDrawer/>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
})