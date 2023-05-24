import React  from 'react';
import { StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/index.js';
import TabBar from './src/routes/TabBar'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#619dfd" barStyle="ligth-content"/>
      <Routes
      
      ></Routes>
     
    </NavigationContainer>
  );
}

