import React, { ReactNode, useEffect, useRef } from 'react';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { Animated } from 'react-native';
import { AuthStackParamList } from '../navigation/AuthNavigator';
import { RootStackParamList } from '../navigation/RootNavigator';
import { AuthScreens, BottomTabScreens, RootScreens } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface INavigationTransition {
  children: ReactNode[];
}

type ParamList = AuthStackParamList | RootStackParamList;
type Screens = RootScreens | BottomTabScreens | AuthScreens;

type TNavigationProp = NativeStackNavigationProp<ParamListBase, Screens>;

const useNavigationTransition = () => {
  const navigation = useNavigation<TNavigationProp>();
  const opac = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(opac.current, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const navigate = (screen: Screens, params: ParamList) => {
    // Start animations, wait for them to end
    Animated.timing(opac.current, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate(screen, params);
    });
  };

  const NavigationTransition: React.FC<INavigationTransition> = React.useCallback(
    ({ children }) => {
      const ReactNodeMap = children.map((element) => <Animated.View>{element}</Animated.View>);
      return <>{ReactNodeMap}</>;
    },
    [navigation],
  );

  return { navigation, NavigationTransition };
};

export default useNavigationTransition;
