import React, { FC, useRef } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Formik } from 'formik';
import { StatusBar } from 'expo-status-bar';

import { AuthRootView, Input, Button, PressableText, PressableSocial } from '../../components';
import { Color } from '../../constants';
import { useAuth, useNavigationTransition } from '../../hooks';
import { AuthScreens } from '../../navigation/types';
import { isIOS } from '../../utils';

import styles from './styles';

const SignupScreen: FC = () => {
  const passwordInput = useRef<TextInput>(null!);

  const { onEmailPasswordSignup, loadingSignUp } = useAuth();
  const { NavigationTransition, navigate, animatedStyle } = useNavigationTransition();

  return (
    <AuthRootView backgroundTitle={'Social'}>
      <StatusBar style="light" />
      <View style={styles.topHalfContainer} />
      <KeyboardAvoidingView behavior={isIOS() ? 'padding' : 'height'} style={styles.bottomHalfContainer} keyboardVerticalOffset={160}>
        <NavigationTransition animatedStyle={animatedStyle}>
          <Text style={styles.subtitleText}>{'Sign Up'}</Text>
          <Text style={styles.descriptionText}>{"Choose how you'd like to sign up."}</Text>
          <Formik initialValues={{ email: '', password: '' }} onSubmit={onEmailPasswordSignup}>
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
                <Button label={'SIGN UP'} onPress={handleSubmit} loading={loadingSignUp} />
              </>
            )}
          </Formik>
        </NavigationTransition>
      </KeyboardAvoidingView>
        <NavigationTransition animatedStyle={animatedStyle}>
          <View style={styles.socialsContainer}>
              <PressableSocial 
                name={'facebook-square'} 
                size={40} 
                color={Color.teal} 
                onPress={() => {}} 
              />
              <PressableSocial 
                name={'apple'} 
                size={40} 
                color={Color.teal} 
                onPress={() => {}} 
                style={{ marginHorizontal: 30 }} 
              />
              <PressableSocial 
                name={'google'} 
                size={40} 
                color={Color.teal} 
                onPress={() => {}} 
              />
          </View>
          <View style={styles.signupContainer}>
            <Text style={styles.accountQText}>{'Already have an account? '}</Text>
            <PressableText
              label={'Sign in'}
              color={Color.teal}
              fontSize={16}
              onPress={() => navigate(AuthScreens.LoginScreen)}
            />
          </View>
        </NavigationTransition>
    </AuthRootView>
  );
};

export default SignupScreen;
