import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Color } from '../../constants';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 7,
  },
  topHalfContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomHalfContainer: {
    flex: 4,
  },
  titleText: {
    fontSize: 72,
    fontWeight: '600',
    color: Color.white
  },
  subtitleText: {
    marginLeft: 12,
    fontSize: 36,
    fontWeight: '600',
    color: Colors.white
  },
  descriptionText: {
    fontSize: 17,
    marginLeft: 12,
    color: Color.lightGrey,
    fontFamily: "Montserrat-Regular"
  },
  ctaText: {
    textAlign: 'center',
    fontSize: 16,
    color: Color.teal,
    fontFamily: "Montserrat-Regular"
  },
  accountQText: {
    fontSize: 16,
    color: Color.white,
    fontFamily: "Montserrat-Regular"
  },
  signupContainer: {
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: "center",
    minHeight: 40
  }
});

export default styles;