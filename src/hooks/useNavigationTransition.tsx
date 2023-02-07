import React, { ReactNode, useRef } from 'react';
import { ParamListBase, useNavigation, useFocusEffect } from '@react-navigation/native';
import { Animated, Easing } from 'react-native';
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

  useFocusEffect(() => {
    Animated.timing(opac.current, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  });

  const navigate = (screen: Screens, params?: ParamList) => {
    // Start animations, wait for them to end
    Animated.timing(opac.current, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start(() => {
      navigation.navigate(screen, params);
    });
  };

  const NavigationTransition: React.FC<INavigationTransition> = React.useCallback(({ children }) => {
    const ReactNodeMap = children.map((element) => (
      <Animated.View style={{ opacity: opac.current, transform: [{ scale: opac.current }] }}>{element}</Animated.View>
    ));
    return <>{ReactNodeMap}</>;
  }, []);

  return { navigate, NavigationTransition };
};

export default useNavigationTransition;
