import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'black'
  },
  titleText: {
    fontSize: 72,
    color: "white",
    fontFamily: 'Montserrat-Medium'
  },
  backgroundTextContainer: {
    position: 'absolute', 
    alignItems: 'center',
    top: 0, 
    bottom: 0, 
    left: 0, 
    right: 0
  },
});

export default styles;