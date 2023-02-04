import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import Reanimated, { useAnimatedStyle, useSharedValue, withSpring, WithSpringConfig } from 'react-native-reanimated';

import { Color, Size } from '../../constants';

import styles from './styles';
import { useEffect, useState } from 'react';

const BottomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets();
  const indicatorOffset = useSharedValue(0);
  const [animate, toggleAnimation] = useState(false);

  const tabCount = state.routes?.length;
  const tabWidth = Size.width / tabCount;

  const springConfig: WithSpringConfig = {
    damping: 20,
    velocity: 100
  }

  useEffect(() => {
    indicatorOffset.value = withSpring((state.index) * tabWidth, springConfig);
  }, [animate]);

  const animStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: indicatorOffset.value }],
    };
  });

  return (
    <BlurView tint="dark" intensity={50} style={styles.blurView}>
      <Reanimated.View style={[{ position: 'absolute', height: 4, borderRadius: 2, width: tabWidth, backgroundColor: Color.teal }, animStyle]} />
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            toggleAnimation((_animate) => !_animate);
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ 
                name: route.name,
                params: {},
                merge: true,
              });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const getIconName = (routeName: string) => {
            switch(routeName) {
              case 'HomeScreen':
                return isFocused ? 'home' : 'home-outline';
              case 'MessagesScreen':
                return isFocused ? 'mail' : 'mail-outline';
              case 'PostScreen':
                return isFocused ? 'add-circle' : 'add-circle-outline' ;
              case 'NotificationsScreen':
                return isFocused ? 'notifications' : 'notifications-outline';
              case 'SettingsScreen':
                return isFocused ? 'settings' : 'settings-outline';
            }
          }

          return (
          <View key={index} style={[styles.iconContainer,  { paddingBottom: bottom }]}>
            <TouchableOpacity
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <Ionicons 
                name={getIconName(route.name)}
                size={30}
                color={Color.white}
              />
            </TouchableOpacity>
             </View>
          );
        })}
      </View>
    </BlurView>
  );
};

export default BottomTabBar;