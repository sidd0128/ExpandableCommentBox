import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    button: {
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: colors.blue,
      marginVertical: 5,
    },
    disabled: {
      backgroundColor: colors.gray3,
    },
    text: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.white,
    },
    disabledText: {
      color: colors.gray2,
    },
  });

  export default styles;

