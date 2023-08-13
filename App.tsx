import React from 'react';
import {Dimensions,Image,SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
import Home from './src/screens/Home';
import MainStack from './src/navigation/MainStack';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  
  const ScreenHeight = Dimensions.get('window').height;

  return (
    <>
      <MainStack></MainStack>
    </>
  );
}


export default App;
