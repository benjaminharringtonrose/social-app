import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC, useState } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';

import { Button, Input, AuthRootView } from '../../components';
import { AuthStackParamList } from '../../navigation/AuthNavigator';
import { isIOS } from '../../utils';

import styles from './styles';

type TNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'LoginScreen'>;

const LoginScreen: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<TNavigationProp>();

  return (
    <AuthRootView backgroundTitle={"Social"}>
      <StatusBar style="light" />
      <View style={styles.topHalfContainer}/>
        <KeyboardAvoidingView
          behavior={isIOS() ? 'padding' : 'height'}
          style={styles.bottomHalfContainer}
        >
          <Text style={styles.subtitleText}>{"Login"}</Text>
          <Text style={styles.descriptionText}>{"Welcome back to the Social experience."}</Text>
          <Input 
            onChangeText={setEmail} 
            value={email}
            textInputProps={{ returnKeyType: 'next' }}
            placeholder={"EMAIL"}
            leadingIcon={(isFocused) => {
              return (
                <Ionicons 
                  name="mail-outline" 
                  size={24} 
                  color={'#A9A9A9'} 
                />
              );
            }}
          />
          <Input
            onChangeText={setPassword}
            value={password}
            placeholder={"PASSWORD"}
            leadingIcon={(isFocused) => {
              return (
                <Ionicons 
                  name="lock-closed-outline" 
                  size={24}
                  color={'#A9A9A9'} 
                />
              );
            }}
          />
          <Button label={"LOGIN"} onPress={() => {}} />
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.ctaText}>{"Forgot Password?"}</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <View style={styles.signupContainer}>
          <Text style={styles.accountQText}>{"Don't have an account? "}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')} style={{ paddingVertical: 20 }}>
            <Text style={[styles.ctaText, {fontFamily: "Montserrat-Bold"}]}>{"Sign up"}</Text>
          </TouchableOpacity>
        </View>

    </AuthRootView>
  );
};

export default LoginScreen;