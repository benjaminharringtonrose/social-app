import React, { FC, useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';

import { BottomTabParamList } from '../../navigation/types';
import { PressableText, RootView, SettingRow } from '../../components';
import { Color, Font, Size } from '../../constants';
import { useAnimatedTransition, useAuth } from '../../hooks';

import styles from './styles';

type TNavigationProp = NativeStackNavigationProp<BottomTabParamList, 'SettingsScreen'>;

const SettingsScreen: FC = () => {
  const [pushEnabled, setPushEnabled] = useState(false);

  const { onSignout } = useAuth();
  const { AnimatedTransition, animatedStyle } = useAnimatedTransition({ animationType: 'fadeInFadeOut' });

  const navigation = useNavigation<TNavigationProp>();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <PressableText 
          onPress={onSignout} 
          label={"Signout"} 
          fontSize={14} 
          color={Color.white} 
          style={{ marginRight: Size.gutter }}
        />
      )      
    });
  }, []);

  return (
    <RootView>
      <AnimatedTransition animatedStyle={animatedStyle}>
        <View style={{ marginTop: 50, padding: Size.gutter }}>
          <Text style={styles.sectionText}>{'Account'}</Text>
          <TouchableOpacity onPress={() => {}} style={{ flexDirection: 'row', alignItems: 'center', borderTopWidth: 1, borderBottomWidth: 1, borderColor: Color.gray5, padding: Size.gutter, marginBottom: 20 }}>
            <Image style={styles.avatarPlaceholder} source={{ uri: 'https://picsum.photos/100/100' }} />
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{ color: Color.white, fontFamily: Font.family.montserratMedium }}>{"John Smith"}</Text>
              <Text style={{ color: Color.gray, fontFamily: Font.family.montserratMedium }}>{"johnsmith@gmail.com"}</Text>
            </View>
            <Ionicons name={'chevron-forward'} color={Color.gray} size={30} />
          </TouchableOpacity>
          <SettingRow
            label={'Delete Account'}
            style={{ marginBottom: 20 }}
            textStyle={{ color: Color.white }}
            onPress={() => {}}
          />
          <SettingRow
            isEnabled={pushEnabled}
            label={'Push Notifications'}
            style={{ marginBottom: 20 }}
            type={'switch'}
            onPress={() => setPushEnabled((prevState) => !prevState)}
          />
        </View>
      </AnimatedTransition>
    </RootView>
  );
};

export default SettingsScreen;