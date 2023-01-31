import React, { FC, useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Button, Input, RootView } from '../../components';
import { isIOS } from '../../utils';

import styles from './styles';

const LoginScreen: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <RootView>
      <View style={styles.topHalfContainer} />
        <KeyboardAvoidingView
          behavior={isIOS() ? 'padding' : 'height'}
          style={styles.bottomHalfContainer}
        >
          <Input 
            onChangeText={setEmail} 
            value={email} 
            textInputProps={{ placeholder: 'Email' }} 
          />
          <Input
            onChangeText={setPassword} 
            value={password} 
            textInputProps={{ placeholder: 'Password' }} 
          />
          <Button label={"Login"} onPress={() => {}} />
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.forgotPasswordText}>{"Forgot Password?"}</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <View style={styles.signupContainer}>
          <Text style={{ fontSize: 16 }}>{"Don't have an account? "}</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ textAlign: 'center', fontSize: 16 }}>{"Sign up"}</Text>
          </TouchableOpacity>
        </View>

    </RootView>
  );
};

export default LoginScreen;