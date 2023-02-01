import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    minHeight: 60,
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 5,
    borderRadius: 20,
    justifyContent: 'center'
  },
  row: {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeholderText: { 
    fontSize: 12, 
    fontWeight: "500", 
    marginLeft: 34 
  }
});

export default styles;