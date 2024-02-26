import { TouchableOpacity, Text } from "react-native";
import { Styles } from "../styles/Styles";

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
        Styles.buttonPrimary :
        isSecondary ?
          Styles.buttonSecondary :
          Styles.button}
      onPress={onPress}>
      <Text style={!isDarkText ?
        Styles.buttonTextLight : Styles.buttonTextDark}>
        {title}
      </Text>
    </TouchableOpacity>
  )

}