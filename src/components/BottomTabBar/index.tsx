import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Color } from '../../constants';

const BottomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', marginBottom: bottom }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
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
              return 'home';
            case 'MessagesScreen':
              return 'mail';
            case 'PostScreen':
              return 'add-circle';
            case 'NotificationsScreen':
              return 'notifications';
            case 'SettingsScreen':
              return 'settings';
          }
        }

        return (
          <TouchableOpacity
            key={index}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Ionicons name={getIconName(route.name)} size={30} color={isFocused ? '#673ab7' : Color.white} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabBar;