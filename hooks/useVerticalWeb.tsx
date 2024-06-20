import { useEffect, useState } from "react";
import { Dimensions, Platform } from "react-native"


const useVerticalWeb = () => {
  const [isVerticalWeb, setIsVerticalWeb] = useState(false);

  useEffect(() => {
    const getDimensions = () => {
      const windowWidth = Dimensions.get('screen').width;
      if (Platform.OS === 'web' && windowWidth <= 380)
        setIsVerticalWeb(true)
      else
        setIsVerticalWeb(false)
    }
    getDimensions()
    const subscription = Dimensions.addEventListener('change', getDimensions)
    return () => {
      subscription?.remove()
    }
  }, [])
  return isVerticalWeb;
}
export default useVerticalWeb