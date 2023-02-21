import { NavigatorScreenParams } from "@react-navigation/native";

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

export type RootStackParamList = {
  BottomTabNavigator: NavigatorScreenParams<BottomTabParamList>;
  AuthNavigator: NavigatorScreenParams<AuthStackParamList>;
  LoadingScreen: undefined;
  LoginScreen: undefined;
};

export type AuthStackParamList = {
  LoginScreen: undefined;
  SignupScreen: undefined;
};

export type BottomTabParamList = {
  HomeScreen: undefined;
  MessagesScreen: undefined;
  PostScreen: undefined;
  NotificationsScreen: undefined;
  SettingsScreen: undefined;
}