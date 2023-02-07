import React, { ReactNode, useRef } from 'react';
import { ParamListBase, useNavigation, useFocusEffect } from '@react-navigation/native';
import { Animated, Easing, ViewStyle } from 'react-native';
import { AuthStackParamList } from '../navigation/AuthNavigator';
import { RootStackParamList } from '../navigation/RootNavigator';
import { AuthScreens, BottomTabScreens, RootScreens } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface INavigationTransition {
  children: ReactNode[] | ReactNode;
  style?: ViewStyle;
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
      duration: 250,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  });

  // ParamList type doesn't properly type possible parameters when using this function
  // @Benji how do I fix this??? Let's talk, a generic needs to be set where the navigation transition hook is used and imported above
  // But I don't know how to do that
  const navigate = (screen: Screens, params?: ParamList) => {
    // Start animations, wait for them to end
    Animated.timing(opac.current, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
      easing: Easing.back(1),
    }).start(() => {
      navigation.navigate(screen, params);
    });
  };

  const NavigationTransition: React.FC<INavigationTransition> = React.useCallback(({ children, style }) => {
    if (Array.isArray(children)) {
      const ReactNodeMap = children.map((element) => (
        <Animated.View style={{ ...style, opacity: opac.current, transform: [{ scale: opac.current }] }}>{element}</Animated.View>
      ));
      return <>{ReactNodeMap}</>;
    }

    return <Animated.View style={{ ...style, opacity: opac.current, transform: [{ scale: opac.current }] }}>{children}</Animated.View>;
  }, []);

  return { navigate, NavigationTransition };
};

export default useNavigationTransition;
