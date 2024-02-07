/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Linking
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './components/AppNavigator';


function App(): React.JSX.Element {
  return (
    
       <NavigationContainer>
          <AppNavigator />
      </NavigationContainer>
  );
}


export default App;
