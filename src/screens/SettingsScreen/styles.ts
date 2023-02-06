import { StyleSheet } from 'react-native';

import { Color, Font, Size } from '../../constants';

const styles = StyleSheet.create({
  sectionText: {
    color: Color.white,
    fontFamily: Font.family.montserratMedium,
    fontSize: 24,
    paddingBottom: Size.gutter
  },
  avatarPlaceholder: { 
    width: 70, 
    height: 70, 
    borderRadius: 35, 
    backgroundColor: Color.grey, 
    marginRight: Size.gutter,
  },
});

export default styles;