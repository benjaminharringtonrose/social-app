import { Platform } from "react-native";

export const isIOS = () => Platform.OS === 'ios';

export const getIconName = (routeName: string, isFocused: boolean) => {
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