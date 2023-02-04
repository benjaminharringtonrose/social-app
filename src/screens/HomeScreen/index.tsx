import React, { FC } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { RootView } from '../../components';
import { Color, Size } from '../../constants';

const HomeScreen: FC = () => {
  return (
    <RootView>
      <ScrollView>
      <View style={{ 
        backgroundColor: 'white', 
        marginHorizontal: Size.gutter, 
        height: Size.height / 2,
        borderRadius: 10,
        marginBottom: Size.gutter 
        }}/>
              <View style={{ 
        backgroundColor: 'white', 
        marginHorizontal: Size.gutter, 
        height: Size.height / 2,
        borderRadius: 10,
        marginBottom: Size.gutter 
        }}/>
              <View style={{ 
        backgroundColor: 'white', 
        marginHorizontal: Size.gutter, 
        height: Size.height / 2,
        borderRadius: 10,
        marginBottom: Size.gutter 
        }}/>
      </ScrollView>

    </RootView>
  );
};

export default HomeScreen;