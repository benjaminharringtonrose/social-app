import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  titleText: {
    fontSize: 72,
    fontWeight: '600'
  },
  backgroundTextContainer: {
    position: 'absolute', 
    alignItems: 'center',
    top: 60, 
    bottom: 0, 
    left: 0, 
    right: 0
  },
});

export default styles;