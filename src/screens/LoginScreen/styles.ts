import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 3,
  },
  topHalfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomHalfContainer: {
    flex: 2,
  },
  titleText: {
    fontSize: 72,
    fontWeight: '600'
  },
  subtitleText: {
    fontSize: 36,
    fontWeight: '600',
    marginLeft: 12,
  },
  descriptionText: {
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 12,
  },
  ctaText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700'
  },
  signupContainer: {
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: "center",
    minHeight: 40
  }
});

export default styles;