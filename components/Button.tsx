import { TouchableOpacity, Text, Platform, View } from "react-native";
import { buttonStyles } from "../styles/Styles";
import useVerticalWeb from "../hooks/useVerticalWeb";

interface ButtonProps {
  title: string;
  onPress: () => void;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isDarkText?: boolean;
  isWide?: boolean
}

export default function Button({ title, onPress, isPrimary, isSecondary, isWide, isDarkText }: ButtonProps) {
  const isVerticalWeb = useVerticalWeb()
  return (
    <TouchableOpacity style={[
      buttonStyles.button,
      isPrimary ? buttonStyles.buttonPrimary : null,
      isSecondary ? buttonStyles.buttonSecondary : null,
      isVerticalWeb ? buttonStyles.buttonSmall : null,
      isWide ? buttonStyles.buttonWide : null,
      isWide && isVerticalWeb ? buttonStyles.buttonWideSmall : null
    ]}
      onPress={onPress}>
      <Text style={[
        buttonStyles.buttonTextLight,
        isDarkText ? buttonStyles.buttonTextDark : null]}>
        {title}
      </Text>
      {isWide && <View style={{ width: 32, height: 32 }}></View>}
    </TouchableOpacity>
  )

}