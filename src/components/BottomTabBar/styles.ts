import { StyleSheet } from 'react-native';
import { Color } from '../../constants';

const styles = StyleSheet.create({
  blurView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   },
   iconContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'transparent', 
    paddingTop: 10  
  },
  tabIndicator: { 
    position: 'absolute', 
    height: 4, 
    borderRadius: 2, 
    backgroundColor: Color.teal 
  },
});

export default styles;