import React, { FC, useRef } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';

import { Button, Input, AuthRootView, PressableSocial, PressableText } from '../../components';
import { Color } from '../../constants';
import { useAnimatedTransition, useAuth } from '../../hooks';
import { AuthScreens } from '../../navigation/types';

import styles from './styles';
import { Easing, WithTimingConfig } from 'react-native-reanimated';
import { IUseAnimatedTransitionConfig } from '../../hooks/useAnimatedTransition';

const config: WithTimingConfig = {
  duration: 200,
  easing: Easing.ease,
};

const animatedTranisitionConfig: IUseAnimatedTransitionConfig = { 
  animationType: 'shrinkGrow', 
  config, 
};


const LoginScreen: FC = () => {
  const passwordInput = useRef<TextInput>(null!);

  const { loadingLogin, onEmailPasswordLogin } = useAuth();


  const { AnimatedTransition, navigate, animatedStyle } = useAnimatedTransition(animatedTranisitionConfig);

  return (
    <AuthRootView backgroundTitle={'Social'}>
      <StatusBar style={'light'} />
      <View style={styles.topHalfContainer} />
      <KeyboardAvoidingView behavior={'padding'} style={styles.bottomHalfContainer}>
        <AnimatedTransition animatedStyle={animatedStyle}>
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
                  textInputProps={{ 
                    secureTextEntry: true, 
                    returnKeyType: 'go',
                    onSubmitEditing: () => onEmailPasswordLogin(values),
                  }}
                />
                <Button label={'LOGIN'} onPress={handleSubmit} loading={loadingLogin} />
              </>
            )}
          </Formik>
          <PressableText 
            label={'Forgot Password?'} 
            fontSize={16} 
            color={Color.teal} 
            onPress={() => {}} 
            style={{ alignItems: 'center' }} 
          />
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
        </AnimatedTransition>
      </KeyboardAvoidingView>
      <View style={styles.signupContainer}>
        <AnimatedTransition animatedStyle={animatedStyle} style={{ flexDirection: 'row' }}>
          <Text style={styles.accountQText}>{"Don't have an account? "}</Text>
          <PressableText
            label={'Sign up'}
            fontSize={16}
            color={Color.teal}
            onPress={() => navigate(AuthScreens.SignupScreen)}
          />
        </AnimatedTransition>
      </View>
    </AuthRootView>
  );
};

export default LoginScreen;
