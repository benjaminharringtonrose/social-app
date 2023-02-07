import React, { ForwardRefRenderFunction, useState } from "react";
import { View, TextInput, TextInputProps } from "react-native";
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  WithTimingConfig,
} from "react-native-reanimated";
import { Color, Font } from "../../constants";

import styles from "./styles";

interface IProps {
  onChangeText: (text: string) => void;
  onBlur: (e: any) => void;
  value: string;
  textInputProps?: TextInputProps;
  placeholder?: string;
  LeadingIcon?: JSX.Element;
  TrailingIcon?: JSX.Element;
}

const Input: ForwardRefRenderFunction<TextInput, IProps> = (
  {
    onChangeText,
    onBlur,
    value,
    LeadingIcon,
    TrailingIcon,
    textInputProps,
    placeholder,
  },
  ref
  ) => {
  const placeholderOffset = useSharedValue(0);
  const placeholderOpacity = useSharedValue(1);
  const [isFocused, setIsFocused] = useState(false);

  const animStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: placeholderOffset.value }],
      opacity: placeholderOpacity.value,
    };
  }, [isFocused]);

  const timingConfig: WithTimingConfig = {
    duration: 250,
    easing: Easing.linear,
  };

  return (
    <View
      style={[
        styles.input,
        isFocused && { borderColor: Color.gray2, borderWidth: 1 },
      ]}
    >
      <Reanimated.Text style={[styles.placeholderText, animStyle]}>
        {placeholder}
      </Reanimated.Text>
      <View style={styles.row}>
        {!!LeadingIcon && (
          <View style={{ paddingLeft: 8, justifyContent: "center" }}>
            {LeadingIcon}
          </View>
        )}
        <TextInput
          ref={ref}
          onChangeText={onChangeText}
          onFocus={() => {
            setIsFocused(true);
            placeholderOffset.value = withTiming(-18, timingConfig);
            placeholderOpacity.value = withTiming(0, timingConfig);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            if (!value) {
              placeholderOffset.value = withTiming(0, timingConfig);
              placeholderOpacity.value = withTiming(1, timingConfig);
            }
            onBlur(e);
          }}
          value={value}
          selectionColor={Color.gray}
          autoCapitalize={"none"}
          {...textInputProps}
          style={{
            flex: 1,
            color: Color.lightGrey,
            fontFamily: Font.family.montserratRegular,
            marginLeft: 16,
          }}
        />
        {!!TrailingIcon && TrailingIcon}
      </View>
    </View>
  );
};

export default React.forwardRef(Input);
