import { StyleSheet } from 'react-native';
import { Color, Font } from '../../constants';

const styles = StyleSheet.create({
  label: {
    color: Color.white,
    fontFamily: Font.family.montserratRegular
  },
  borderBottom: {
    borderBottomColor: Color.gray5,
    borderBottomWidth: 1,
  },
});

export default styles;