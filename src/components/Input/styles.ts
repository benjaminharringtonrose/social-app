import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    minHeight: 70,
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 5,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: "#2c2b3f"
  },
  row: {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeholderText: {
    position: 'absolute',
    fontSize: 12, 
    fontWeight: "500", 
    marginLeft: 44,
    color: "#A9A9A9",
    fontFamily: 'Montserrat-Regular'
  }
});

export default styles;