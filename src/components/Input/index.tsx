import React, { FC, useState } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import Reanimated, { useAnimatedStyle, useSharedValue, withSpring, WithSpringConfig, withTiming, Easing } from 'react-native-reanimated';
import { Color } from '../../constants';

import styles from './styles';

interface IProps {
  onChangeText: (text: string) => void;
  value: string;
  textInputProps?: TextInputProps;
  placeholder?: string;
  leadingIcon?: (isFocused: boolean) => JSX.Element;
  trailingIcon?: (isFocused: boolean) => JSX.Element;
}

const Input: FC<IProps> = ({ 
  onChangeText, 
  value, 
  leadingIcon, 
  trailingIcon, 
  textInputProps,
  placeholder
}) => {
  const placeholderOffset = useSharedValue(0);
  const [isFocused, setIsFocused] = useState(false);

  const animStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: placeholderOffset.value }],
    };
  }, [isFocused]);

  return (
    <View style={[styles.input, isFocused && { borderColor: '#A9A9A9' }]}>
      <Reanimated.Text style={[styles.placeholderText, animStyle]}>{placeholder}</Reanimated.Text>
      <View style={styles.row}>
        {!!leadingIcon && (
          <View style={{  paddingLeft: 8, justifyContent: 'center' }}>
            {leadingIcon(isFocused)}
          </View>
          )}
        <TextInput
          onChangeText={onChangeText}
          onFocus={() => {
            setIsFocused(true);
            placeholderOffset.value = withTiming(-18, { easing: Easing.ease, duration: 150 });
          }}
          onBlur={() => {
            setIsFocused(false);
            if(!value) {
              placeholderOffset.value = withTiming(0);
            }

          }}
          value={value}
          selectionColor={"white"}
          autoCapitalize={"none"}
          {...textInputProps}
          style={{ 
            flex: 1, 
            color: Color.lightGrey, 
            fontFamily: "Montserrat-Regular",
            marginLeft: 16
          }}
        />
        {!!trailingIcon && trailingIcon(isFocused)}
      </View>
    </View>
  )
};

export default Input;