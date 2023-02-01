import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC, useState } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { AuthRootView, Input, Button } from '../../components';
import { AuthStackParamList } from '../../navigation/AuthNavigator';
import { isIOS } from '../../utils';

import styles from './styles';
import { StatusBar } from 'expo-status-bar';

type TNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'SignupScreen'>;

const SignupScreen: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<TNavigationProp>();

  return (
    <AuthRootView backgroundTitle={"SOSH"}>
      <StatusBar style="dark" />
      <View style={styles.topHalfContainer}/>
        <KeyboardAvoidingView
          behavior={isIOS() ? 'padding' : 'height'}
          style={styles.bottomHalfContainer}
        >
          <Input
            onChangeText={setEmail} 
            value={email}
            textInputProps={{ placeholder: 'Email' }}
            leadingIcon={(isFocused) => {
              return (
                <Ionicons 
                  name="mail-outline" 
                  size={24} 
                  color={isFocused ? "green" : "black"} 
                />
              );
            }}
          />
          <Input
            onChangeText={setPassword}
            value={password}
            textInputProps={{ placeholder: 'Password' }}
            leadingIcon={(isFocused) => {
              return (
                <Ionicons 
                  name="lock-closed-outline" 
                  size={24}
                  color={isFocused ? "green" : "black"} 
                />
              );
            }}
          />
          <Button label={"Sign Up"} onPress={() => {}} />
        </KeyboardAvoidingView>
        <View style={styles.signupContainer}>
          <Text style={{ fontSize: 16 }}>{"Already have an account? "}</Text>
          <TouchableOpacity onPress={() => navigation.popToTop()} style={{ paddingVertical: 20 }}>
            <Text style={styles.ctaText}>{"Sign in"}</Text>
          </TouchableOpacity>
        </View>

    </AuthRootView>
  );
};

export default SignupScreen;