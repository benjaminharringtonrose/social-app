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
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../api';
import { useAuth } from '../../store';

type TNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'SignupScreen'>;

const SignupScreen: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useAuth();

  const navigation = useNavigation<TNavigationProp>();

  const onEmailPasswordSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setUser(user);
    })
    .catch((error) => {
      console.log(error.message)
    });
  };

  return (
    <AuthRootView backgroundTitle={"Social"}>
      <StatusBar style="light" />
      <View style={styles.topHalfContainer}/>
        <KeyboardAvoidingView
          behavior={isIOS() ? 'padding' : 'height'}
          style={styles.bottomHalfContainer}
        >
          <Text style={styles.subtitleText}>{"Sign Up"}</Text>
          <Text style={styles.descriptionText}>{"Choose how you'd like to sign up."}</Text>
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
            textInputProps={{ returnKeyType: 'go' }}
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
          <Button label={"Sign Up"} onPress={onEmailPasswordSignup} />
        </KeyboardAvoidingView>
        <View style={styles.signupContainer}>
          <Text style={styles.accountQText}>{"Already have an account? "}</Text>
          <TouchableOpacity onPress={() => navigation.popToTop()} style={{ paddingVertical: 20 }}>
            <Text style={styles.ctaText}>{"Sign in"}</Text>
          </TouchableOpacity>
        </View>

    </AuthRootView>
  );
};

export default SignupScreen;