import React, { FC, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { getAuth, signOut } from "firebase/auth/react-native";

import { RootView } from '../../components';
import { Color, Font, Size } from '../../constants';

import styles from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabParamList } from '../../navigation/BottomTabNavigator';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../api';

type TNavigationProp = NativeStackNavigationProp<BottomTabParamList, 'SettingsScreen'>;

const SettingsScreen: FC = () => {

  const navigation = useNavigation<TNavigationProp>();




  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={async () => {
          signOut(auth)
          .then(() => {
            console.log('signout successful');
          })
          .catch(e => console.log(e.message));
        }}>
          <Text style={{ color: Color.white, fontFamily: Font.family.montserratMedium, paddingRight: Size.gutter }}>{"Signout"}</Text>
        </TouchableOpacity>
      )      
    });
  }, []);



  return (
    <RootView>
      <View style={{ marginTop: 50, padding: Size.gutter }}>
        <Text style={styles.sectionText}>{'Account'}</Text>
        <TouchableOpacity onPress={() => {
          signOut(auth)
          .then(() => {
            console.log('signout successful');
          })
          .catch(e => console.log(e.message));;
        }} style={{ flexDirection: 'row', alignItems: 'center', borderTopWidth: 1, borderBottomWidth: 1, borderColor: Color.gray5, padding: Size.gutter }}>
          <Image style={styles.avatarPlaceholder} source={{ uri: 'https://picsum.photos/100/100' }} />
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={{ color: Color.white }}>{"John Smith"}</Text>
            <Text style={{ color: Color.gray }}>{"johnsmith@gmail.com"}</Text>
          </View>
          <Ionicons name={'chevron-forward'} color={Color.gray} size={30} />
        </TouchableOpacity>
      </View>
    </RootView>
  );
};

export default SettingsScreen;