import { Platform, StatusBar, StyleSheet } from "react-native";

export const displayStyles = StyleSheet.create({
  display: {
    width: '100%',
    gap: 8
  },

  baseNumberWrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    overflow: 'hidden'
  },

  baseNumberDisplay: {
    height: 80,
    width: '100%',
    color: 'white',
    fontSize: 72,
    fontWeight: '200',
  },

  baseCode: {
    color: 'white'
  },

  targetNumberWrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    overflow: 'hidden'
  },

  targetNumberDisplay: {
    height: 80,
    width: '100%',
    color: 'gray',
    fontSize: 72,
    fontWeight: '200',
  },

  targetCode: {
    color: 'white'
  }
})
export const buttonStyles = StyleSheet.create({
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
  }
})
export const numpadStyles = StyleSheet.create({
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
  }
})
export const rateStyles = StyleSheet.create({
  rateView: {
    position: 'relative',
    width: '100%',
  },

  getRate: {
    position: 'absolute',
    left: '5%'
  },

  getRateButton: {
    color: 'white',
    fontSize: 32,
  },

  rate: {
    position: 'absolute',
    alignSelf: 'center',
  },

  rateAmmount: {
    color: "#888"
  },

  rateDate: {
    color: 'limegreen'
  }
})
export const utilStyles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
})
export const styles = StyleSheet.create({
  backGround: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  webBackGround: {
    maxWidth: 1080,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: 'gray',
    overflow: 'scroll'
  },
  wrapper: {
    height: 200,
    width: 200,
    display: 'flex',
    alignItems: 'center'
  }
});