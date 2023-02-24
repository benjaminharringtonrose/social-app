import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

interface INavigationTransition {
  children: ReactNode[] | ReactNode;
  style?: ViewStyle;
  animatedStyle: any;
}

const NavigationTransition: React.FC<INavigationTransition> = ({ children, style, animatedStyle  }) => {
  return (
    <Reanimated.View style={[style, animatedStyle]}>{children}</Reanimated.View>
  );
};

export default NavigationTransition;