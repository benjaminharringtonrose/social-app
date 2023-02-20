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

export const useNavigationTransition = () => {
  const navigation = useNavigation<TNavigationProp>();
  const opac = useRef(new Animated.Value(0));

  useFocusEffect(() => {
    opac.current.setValue(0);
    Animated.timing(opac.current, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  });

  const navigate = (screen: Screens, params?: ParamList) => {
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
      const ReactNodeMap = children.map((element, index) => (
        <Animated.View key={index.toString()} style={{ ...style, opacity: opac.current, transform: [{ scale: opac.current }] }}>
          {element}
        </Animated.View>
      ));
      return <>{ReactNodeMap}</>;
    }

    return <Animated.View style={{ ...style, opacity: opac.current, transform: [{ scale: opac.current }] }}>{children}</Animated.View>;
  }, []);

  return { navigate, NavigationTransition };
};
