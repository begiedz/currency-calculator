import { StyleSheet } from "react-native";
export const Styles = StyleSheet.create({
  header: {
    color: 'white',
    // fontFamily: 'monospace'
    alignSelf: 'flex-start'

  },
  container: {
    flex: 1,
    gap: 20,
    alignItems: 'center',
    color: 'white',
    // justifyContent: 'center',
  },
  getRate: {
    backgroundColor: 'lightblue',
    borderRadius: 5,
    padding: 10,
  },
  backGround: {
    backgroundColor: 'black',
    color: 'white',
    flex: 1,
  },


  button: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 8,
  },
  buttonPrimary: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 8,
  },
  buttonSecondary: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 8,
  },
  smallTextDark: {
    fontSize: 32,
    color: 'black'
  },
  smallTextLigth: {
    fontSize: 32,
    color: 'white'
  },

  //numpad
  numpad: {
    gap: 4
  },
  row: {
    maxWidth: '100%',
    flexDirection: 'row',
    gap: 4
  },
  displayPrimaryNumber: {
    fontSize: 96,
    color: 'gray',
    alignSelf: "flex-end",
    fontWeight: '200'
  },
  displaySecondaryNumber: {
    fontSize: 40,
    color: 'gray',
    alignSelf: "flex-end",
    fontWeight: '200'
  },

});
