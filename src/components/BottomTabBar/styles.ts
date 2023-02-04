import { StyleSheet } from 'react-native';
import { Color } from '../../constants';

const styles = StyleSheet.create({
  blurView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   }
});

export default styles;