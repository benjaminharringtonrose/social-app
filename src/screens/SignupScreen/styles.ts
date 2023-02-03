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
  titleText: {
    fontSize: 72,
    fontWeight: '600',
    color: "white"
  },
  subtitleText: {
    marginLeft: 12,
    fontSize: 36,
    fontWeight: '600',
    color: "#5a3d2b"
  },
  descriptionText: {
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 12,
    color: "#e5771e"
  },
  ctaText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: "#f4a127"
  },
  accountQText: { 
    fontSize: 16, 
    color: "#5a3d2b" 
  },
  signupContainer: {
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: "center",
    minHeight: 40
  }
});

export default styles;