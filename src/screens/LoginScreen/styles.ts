import { StyleSheet } from 'react-native';

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
  subtitleText: {
    fontSize: 36,
    marginLeft: 12,
    color: "white",
    fontFamily: "Montserrat-Medium"
  },
  descriptionText: {
    fontSize: 17,
    marginLeft: 12,
    color: "white",
    fontFamily: "Montserrat-Regular"
  },
  ctaText: {
    textAlign: 'center',
    fontSize: 16,
    color: "#35b5ad",
    fontFamily: "Montserrat-Bold"
  },
  accountQText: { 
    fontSize: 16, 
    color: "white",
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