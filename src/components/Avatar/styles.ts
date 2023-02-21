import { StyleSheet } from 'react-native';
import { Color, Size } from '../../constants';

const styles = StyleSheet.create({
  avatarPlaceholder: { 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    backgroundColor: Color.grey, 
    marginRight: Size.gutter,
  },
});

export default styles;