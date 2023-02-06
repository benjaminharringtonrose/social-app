import React, { useCallback } from 'react';
import './src/api/firebase';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { RecoilRoot } from 'recoil';

import { RootNavigator } from './src/navigation/RootNavigator';
import { Listeners } from './src/components';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.otf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.otf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.otf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.otf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.otf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <RecoilRoot>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
      <Listeners />
    </RecoilRoot>

  );
}