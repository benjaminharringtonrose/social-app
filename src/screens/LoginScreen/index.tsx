import React, { FC, useRef, useState } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth/react-native';
import { Formik } from 'formik';

import { Button, Input, AuthRootView, PressableSocial, PressableText } from '../../components';
import { Color } from '../../constants';
import { useAuth, useNavigationTransition } from '../../hooks';
import { AuthScreens, ILoginFormProps } from '../../types';

import styles from './styles';



const LoginScreen: FC = () => {
  const passwordInput = useRef<TextInput>(null!);

  const { loadingLogin, onEmailPasswordLogin } = useAuth();
  const { NavigationTransition, navigate } = useNavigationTransition();

  return (
    <AuthRootView backgroundTitle={'Social'}>
      <StatusBar style={'light'} />
      <View style={styles.topHalfContainer} />
      <KeyboardAvoidingView behavior={'padding'} style={styles.bottomHalfContainer}>
        <NavigationTransition>
          <Text style={styles.subtitleText}>{'Log In'}</Text>
          <Text style={styles.descriptionText}>{'Welcome back to the Social experience.'}</Text>
          <Formik initialValues={{ email: '', password: '' }} onSubmit={onEmailPasswordLogin}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <>
                <Input
                  onChangeText={handleChange('email')}
                  value={values.email}
                  placeholder={'EMAIL'}
                  LeadingIcon={<Ionicons name={'mail-outline'} size={24} color={Color.grey} />}
                  textInputProps={{
                    returnKeyType: 'next',
                    blurOnSubmit: false,
                    onSubmitEditing: () => {
                      handleBlur('email');
                      passwordInput.current?.focus();
                    },
                  }}
                />
                <Input
                  ref={passwordInput}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder={'PASSWORD'}
                  LeadingIcon={<Ionicons name={'lock-closed-outline'} size={24} color={Color.grey} />}
                  textInputProps={{ secureTextEntry: true, returnKeyType: 'go' }}
                />
                <Button label={'LOGIN'} onPress={handleSubmit} loading={loadingLogin} />
              </>
            )}
          </Formik>
          <PressableText label={'Forgot Password?'} fontSize={16} color={Color.teal} onPress={() => {}} style={{ alignItems: 'center' }} />
          <View style={styles.socialsContainer}>
            <PressableSocial name={'facebook-square'} size={40} color={Color.teal} onPress={() => {}} />
            <PressableSocial name={'apple'} size={40} color={Color.teal} onPress={() => {}} style={{ marginHorizontal: 30 }} />
            <PressableSocial name={'google'} size={40} color={Color.teal} onPress={() => {}} />
          </View>
        </NavigationTransition>
      </KeyboardAvoidingView>
      <View style={styles.signupContainer}>
        <NavigationTransition>
          <Text style={styles.accountQText}>{"Don't have an account? "}</Text>
          <PressableText
            label={'Sign up'}
            fontSize={16}
            color={Color.teal}
            onPress={() => navigate(AuthScreens.SignupScreen)}
            style={{ alignItems: 'center', paddingVertical: 20 }}
            bold
          />
        </NavigationTransition>
      </View>
    </AuthRootView>
  );
};

export default LoginScreen;
