import { StyleSheet } from 'react-native';
import { Color } from '../../constants';

const styles = StyleSheet.create({
  root: {
    minHeight: 60,
    margin: 12,
    padding: 10,
    borderRadius: 30,
    backgroundColor: Color.teal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    color: "white"
  }
});

export default styles;