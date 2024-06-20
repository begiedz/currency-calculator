import { Platform, StatusBar, StyleSheet } from "react-native";

export const displayStyles = StyleSheet.create({
  display: {
    width: '100%',
    gap: 8
  },

  numberWrapper: {
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

  buttonSmall: {
    width: 60,
    height: 60,
    borderRadius: 20
  },

  buttonPrimary: {
    backgroundColor: 'orange',
  },

  buttonSecondary: {
    backgroundColor: 'darkgray',
  },

  buttonWide: {
    width: 160,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  buttonWideSmall: {
    width: 128
  },

  buttonTextDark: {
    color: 'black'
  },

  buttonTextLight: {
    fontSize: 36,
    color: 'white'
  }
})
export const numpadStyles = StyleSheet.create({
  numpad: {
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
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  getRateButton: {
    color: 'white',
    fontSize: 32,
  },

  rate: {
    display: 'flex',
    alignItems: 'center'
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
  background: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  webBackground: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    maxWidth: 768,
    overflow: 'scroll'
  },
  wrapper: {
    height: 200,
    width: 200,
    display: 'flex',
    alignItems: 'center'
  }
});