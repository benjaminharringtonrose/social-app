import React, { FC, useState } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import Reanimated, { useAnimatedStyle, useSharedValue, withTiming, Easing, WithTimingConfig } from 'react-native-reanimated';
import { Color, Font } from '../../constants';

import styles from './styles';

interface IProps {
  onChangeText: (text: string) => void;
  value: string;
  textInputProps?: TextInputProps;
  placeholder?: string;
  leadingIcon?: (_isFocused: boolean) => JSX.Element;
  trailingIcon?: (_isFocused: boolean) => JSX.Element;
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
  const placeholderOpacity = useSharedValue(1);
  const [isFocused, setIsFocused] = useState(false);

  const animStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: placeholderOffset.value }],
      opacity: placeholderOpacity.value
    };
  }, [isFocused]);

  const timingConfig: WithTimingConfig = {
    duration: 250,
    easing: Easing.linear
  };

  return (
    <View style={[styles.input, isFocused && { borderColor: Color.gray2, borderWidth: 1 }]}>
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
            placeholderOffset.value = withTiming(-18, timingConfig);
            placeholderOpacity.value = withTiming(0, timingConfig);
          }}
          onBlur={() => {
            setIsFocused(false);
            if(!value) {
              placeholderOffset.value = withTiming(0, timingConfig);
              placeholderOpacity.value = withTiming(1, timingConfig);
            }

          }}
          value={value}
          selectionColor={Color.gray}
          autoCapitalize={"none"}
          {...textInputProps}
          style={{ 
            flex: 1, 
            color: Color.lightGrey, 
            fontFamily: Font.family.montserratRegular,
            marginLeft: 16
          }}
        />
        {!!trailingIcon && trailingIcon(isFocused)}
      </View>
    </View>
  )
};

export default Input;