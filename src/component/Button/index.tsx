import React, {FC} from 'react';
import { TouchableOpacity, Text } from 'react-native';
import ButtonProps from '../../types/ButtonProps';
import styles from './styles';


const Button: FC<ButtonProps> = ({ label, isEnabled, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, !isEnabled && styles.disabled]}
      onPress={isEnabled ? onPress : undefined}
      activeOpacity={isEnabled ? 0.8 : 1}
    >
      <Text style={[styles.text, !isEnabled && styles.disabledText]}>{label}</Text>
    </TouchableOpacity>
  );
};



export default Button;
