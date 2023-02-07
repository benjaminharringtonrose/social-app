import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { FC, useRef, useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Formik } from 'formik';

import { AuthRootView, Input, Button, PressableText } from "../../components";
import { AuthStackParamList } from "../../navigation/AuthNavigator";
import { isIOS } from "../../utils";

import styles from "./styles";
import { StatusBar } from "expo-status-bar";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Color } from "../../constants";

type TNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  "SignupScreen"
>;

interface IFormProps { 
  email: string; 
  password: string 
}

const SignupScreen: FC = () => {
  const [loading, setLoading] = useState(false);
  const passwordInput = useRef<TextInput>(null!);
  const navigation = useNavigation<TNavigationProp>();

  const onEmailPasswordSignup = async (values: IFormProps) => {
    try {
      setLoading(true);
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, values.email, values.password);
    } catch (e) {
      console.warn(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthRootView backgroundTitle={"Social"}>
      <StatusBar style="light" />
      <View style={styles.topHalfContainer} />
      <KeyboardAvoidingView
        behavior={isIOS() ? "padding" : "height"}
        style={styles.bottomHalfContainer}
        keyboardVerticalOffset={160}
      >
        <Text style={styles.subtitleText}>{"Sign Up"}</Text>
        <Text style={styles.descriptionText}>
          {"Choose how you'd like to sign up."}
        </Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={onEmailPasswordSignup}
        >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <Input
              onChangeText={handleChange("email")}
              onBlur={() => {
                handleBlur("email");
                passwordInput.current?.focus();
              }}
              value={values.email}
              placeholder={"EMAIL"}
              LeadingIcon={<Ionicons name={"mail-outline"} size={24} color={Color.grey} />}
              textInputProps={{ returnKeyType: "next" }}
            />
            <Input
              ref={passwordInput}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              placeholder={"PASSWORD"}
              LeadingIcon={<Ionicons name={"lock-closed-outline"} size={24} color={Color.grey} />}
              textInputProps={{secureTextEntry: true, returnKeyType: "go" }}
            />
            <Button
              label={"LOGIN"}
              onPress={handleSubmit}
              loading={loading}
            />
          </>
        )}
        </Formik>
      </KeyboardAvoidingView>
      <View style={styles.signupContainer}>
        <Text style={styles.accountQText}>{"Already have an account? "}</Text>
        <PressableText 
          label={"Sign in"} 
          color={Color.teal} 
          fontSize={16} 
          onPress={() => navigation.popToTop()}
          style={{ paddingVertical: 20 }}
        />
      </View>
    </AuthRootView>
  );
};

export default SignupScreen;
