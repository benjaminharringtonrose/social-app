export interface IContent {
  id: string;
  avatarUrl?: string;
  name: string;
  timestamp: string;
  caption?: string;
  content?: string[];
  likes?: number;
  comments?: number;
}

export enum AuthEnum {
  Authenticated = 'Authenticated',
  Unauthenticated = 'Unauthenticated',
  None = 'None'
}

export enum RootScreens {
  BottomTabNavigator = "BottomTabNavigator",
  AuthNavigator = "AuthNavigator",
  LoadingScreen = "LoadingScreen"
}

export enum AuthScreens {
  LoginScreen = "LoginScreen",
  SignupScreen = "SignupScreen",
}

export enum BottomTabScreens {
  HomeScreen = "HomeScreen",
  MessagesScreen = "MessagesScreen",
  PostScreen = "PostScreen",
  NotificationScreen = "NotificationsScreen",
  SettingsScreen = "SettingsScreen",
}

export interface ILoginFormProps {
  email: string;
  password: string;
}

export interface ISignUpFormProps {
  email: string;
  password: string;
}
