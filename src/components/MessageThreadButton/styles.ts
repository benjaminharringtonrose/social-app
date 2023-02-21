import { StyleSheet } from 'react-native';
import { Color, Font, Size } from '../../constants';

const styles = StyleSheet.create({
  root: { 
    flexDirection: 'row', 
    borderBottomWidth: StyleSheet.hairlineWidth, 
    borderBottomColor: Color.gray3, 
    padding: Size.gutter 
  },
  textContainer: { 
    justifyContent: 'center' 
  },
  name: { 
    color: Color.white,
    fontFamily: Font.family.montserratRegular,
  },
  timestamp: { 
    color: Color.gray,
    fontFamily: Font.family.montserratRegular,
  },
  icon: {
    flex: 1, 
    alignItems: 'flex-end', 
    justifyContent: 'center'
  },
});

export default styles;