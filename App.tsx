import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


//custom font
import Apploading from "expo-app-loading";
import {useFonts} from "expo-font";

//React Navigation
import RootStack from './navigators/RootStack';

export default function App() {

  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  });

  if(!fontsLoaded){
    return <Apploading/>;
  }

  return (
    <RootStack/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
