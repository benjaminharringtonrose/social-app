import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { Color } from '../../constants';

const HomeScreen: FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Color.black }}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;