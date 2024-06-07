import { TouchableOpacity, Text } from "react-native";
import { buttonStyles } from "../styles/Styles";

interface ButtonProps {
  title: string;
  onPress: () => void;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isDarkText?: boolean;
}

export default function Button({ title, onPress, isPrimary, isSecondary, isDarkText }: ButtonProps) {

  return (
    <TouchableOpacity style={
      isPrimary ?
        buttonStyles.buttonPrimary :
        isSecondary ?
          buttonStyles.buttonSecondary :
          buttonStyles.button}
      onPress={onPress}>
      <Text style={!isDarkText ?
        buttonStyles.buttonTextLight : buttonStyles.buttonTextDark}>
        {title}
      </Text>
    </TouchableOpacity>
  )

}