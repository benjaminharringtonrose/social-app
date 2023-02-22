import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';

interface INavigationTransition {
  children: ReactNode[] | ReactNode;
  style?: ViewStyle;
  animatedStyle: any;
}

const NavigationTransition: React.FC<INavigationTransition> = ({ children, style, animatedStyle  }) => {
  if (Array.isArray(children)) {
    const ReactNodeMap = children.map((element, index) => (
      <Reanimated.View key={index}  style={[style, animatedStyle]}>
        {element}
      </Reanimated.View>
    ));
    return <>{ReactNodeMap}</>;
  }

  return <Reanimated.View style={[style, animatedStyle]}>{children}</Reanimated.View>;
};

export default NavigationTransition;