import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  topHalfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 72,
    fontWeight: '600'
  },
  bottomHalfContainer: {
    flex: 1,
  },
  ctaText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700'
  },
  signupContainer: {
    flexDirection: 'row', 
    justifyContent: 'center',
  }
});

export default styles;