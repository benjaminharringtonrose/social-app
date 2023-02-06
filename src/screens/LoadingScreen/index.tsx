import { FC } from 'react';
import { ActivityIndicator, View } from 'react-native'
import { Color } from '../../constants';

const LoadingScreen: FC = () => {
  return (
    <View style={{ 
      flex: 1, 
      backgroundColor: Color.background, 
      justifyContent: 'center', 
      alignItems: 'center' 
      }}>
      <ActivityIndicator color={Color.white} size={'large'} />
    </View>
  )
};

export default LoadingScreen;