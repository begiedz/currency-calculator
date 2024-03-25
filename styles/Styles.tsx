import { StyleSheet } from "react-native";
export const Styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    color: 'white',

  },
  backGround: {
    height: '100%',
    width: '100%',
    maxWidth: 500,
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'flex-end'
  },

  //display
  display: {
    width: '100%',
  },

  baseNumberWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    backgroundColor: '#222',
  },
  baseNumberDisplay: {
    fontSize: 64,
    height: 80,
    color: 'white',
    fontWeight: '200',
    width: '100%',
  },
  baseCode: {
    color: 'white'
  },
  targetNumberWrapper: {
    backgroundColor: '#222',
  },
  targetNumberDisplay: {
    fontSize: 64,
    height: 80,
    color: 'gray',
    fontWeight: '200',
    width: '100%',
    alignSelf: "flex-end",
  },
  targetCode: {
    color: 'white'
  },

  //numpad
  numpad: {
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    margin: 16,
  },
  row: {
    maxWidth: '100%',
    flexDirection: 'row',
    gap: 16,
  },

  // buttons
  button: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: '#333',

    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonPrimary: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSecondary: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: 'darkgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextDark: {
    fontSize: 36,
    color: 'black'
  },
  buttonTextLight: {
    fontSize: 36,
    color: 'white'
  },
  //rate
  rateView: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    // alignItems: 'stretch'
  },
  getRateButtonWrapper: {
    gap: 20,
    alignItems: 'center',
    color: 'white',
  },
  getRate: {
  },
  getRateButton: {
    color: 'white',
    fontSize: 32,
  },
  rate: {

  },
  rateAmmount: {
    color: "#888"
  },
  rateDate: {
    color: 'limegreen'
  },

});
