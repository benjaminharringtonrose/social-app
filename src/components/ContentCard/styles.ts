import { StyleSheet } from 'react-native';
import { Color, Font, Size } from '../../constants';

const styles = StyleSheet.create({
  rootContainer: { 
    backgroundColor: Color.black, 
    marginHorizontal: Size.gutter,
    borderRadius: 10,
    borderColor: Color.tertiaryBackground,
    borderWidth: 1,
    },
    topRowContainer: { 
      flexDirection: 'row', 
      padding: Size.gutter 
    },
    avatarPlaceholder: { 
      width: 50, 
      height: 50, 
      borderRadius: 25, 
      backgroundColor: Color.grey, 
      marginRight: Size.gutter,
    },
    topRowTextContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    text: { 
      color: Color.white,
      fontFamily: Font.family.montserratRegular,
    },
    contentContainer: {
      paddingHorizontal: Size.gutter,
      paddingBottom: Size.gutter,
    },
    captionText: {
      color: Color.white,
      fontFamily: Font.family.montserratRegular,
    },
    imagePlaceholder: {
      height: 300, 
      marginTop: Size.gutter, 
      borderRadius: 10, 
      backgroundColor: Color.grey 
    },
    bottomRowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: Size.gutter,
      paddingBottom: Size.gutter,
    }
});

export default styles;