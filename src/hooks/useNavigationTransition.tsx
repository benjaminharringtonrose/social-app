import React, { ReactNode, useCallback } from 'react';
import { ParamListBase, useNavigation, useFocusEffect } from '@react-navigation/native';
import { ViewStyle } from 'react-native';
import { 
  AuthStackParamList, 
  RootStackParamList, 
  AuthScreens, 
  BottomTabScreens, 
  RootScreens 
} from '../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Reanimated, { Easing, runOnJS, runOnUI, useAnimatedStyle, useSharedValue, withDelay, withTiming, WithTimingConfig } from 'react-native-reanimated';

interface INavigationTransition {
  children: ReactNode[] | ReactNode;
  style?: ViewStyle;
  animatedStyle: any;
}

type ParamList = AuthStackParamList | RootStackParamList;
type Screens = RootScreens | BottomTabScreens | AuthScreens;

type TNavigationProp = NativeStackNavigationProp<ParamListBase, Screens>;

const NavigationTransition: React.FC<INavigationTransition> = ({ children, style, animatedStyle  }) => {
  if (Array.isArray(children)) {
    const ReactNodeMap = children.map((element, index) => (
      <Reanimated.View key={index}  style={[style, animatedStyle]}>
        {element}
      </Reanimated.View>
    ));
    return <>{ReactNodeMap}</>;
  }

  return <Reanimated.View style={[style, animatedStyle]}>{children}</Reanimated.View>;
};

export const useNavigationTransition = () => {
  const navigation = useNavigation<TNavigationProp>();
  const opacRef = useSharedValue(0);
  const scaleRef = useSharedValue(0);

  const config: WithTimingConfig = {
    duration: 200,
  };

  useFocusEffect(() => {
    opacRef.value = 1;
    scaleRef.value = 1;
  });

  const navigate = (screen: Screens, params?: ParamList) => {
    opacRef.value = 0;
    scaleRef.value = 0;
    setTimeout(() => {
      navigation.navigate(screen, params);
    }, 350);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(opacRef.value, config),
    transform: [{ scale: withTiming(scaleRef.value, config) }],
  }), [opacRef.value, scaleRef.value])



  return { navigate, NavigationTransition, animatedStyle };
};
