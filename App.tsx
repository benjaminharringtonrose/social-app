import React from 'react';
import './src/config/firebaseConfig';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/navigation/RootNavigator';

export default function App() {
  return (
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
  );
}