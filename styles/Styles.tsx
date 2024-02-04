import { StyleSheet } from "react-native";
export const Styles = StyleSheet.create({
  header: {
    color: 'white',
    alignSelf: 'flex-start'

  },
  container: {
    flex: 1,
    gap: 20,
    alignItems: 'center',
    color: 'white',
  },
  getRate: {
    position: "absolute",
    bottom: 0,
    left: 24,
    color: 'white'
  },
  getRateButton: {
    color: 'white',
    fontSize: 32,
  },
  rate: {
    alignItems: 'center',
    position: "absolute",
    bottom: 0,
  },
  rateAmmount: {
    color: "#888"
  },
  rateDate: {
    color: 'limegreen'
  },
  backGround: {
    backgroundColor: 'black',
    color: 'white',
    flex: 1,
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

  //numpad
  numpad: {
    width: "100%",
    alignItems: 'center',
    gap: 16,
    position: 'absolute',
    bottom: 50,
  },
  row: {
    maxWidth: '100%',
    flexDirection: 'row',
    gap: 16,
  },
  //display
  displayPrimaryNumber: {
    fontSize: 64,
    color: 'white',
    backgroundColor: 'gray',
    alignSelf: "flex-end",
    fontWeight: '200'
  },
  displaySecondaryNumber: {
    fontSize: 64,
    color: 'gray',
    alignSelf: "flex-end",
    fontWeight: '200'
  },
});
