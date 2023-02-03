import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    minHeight: 50,
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: "#2c2b3f"
  },
  row: {
    flex: 1, 
    flexDirection: 'row',
  },
  placeholderText: {
    position: 'absolute',
    fontSize: 12, 
    fontWeight: "500", 
    marginLeft: 58,
    color: "#A9A9A9",
    fontFamily: 'Montserrat-Regular'
  }
});

export default styles;