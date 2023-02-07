import { StyleSheet } from 'react-native';
import { Color } from '../../constants';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 2,
  },
  topHalfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomHalfContainer: {
    flex: 1,
  },
  subtitleText: {
    fontSize: 36,
    marginLeft: 12,
    color: Color.white,
    fontFamily: "Montserrat-Medium"
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
    minHeight: 40,
  },
  socialLoginButton: {
    width: 60, 
    height: 60, 
    backgroundColor: Color.lightGrey, 
    borderRadius: 10
  },
  socialsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  }
});

export default styles;