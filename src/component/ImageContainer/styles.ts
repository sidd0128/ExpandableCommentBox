import {StyleSheet } from 'react-native';
import colors from '../../constants/colors';


export const styles = StyleSheet.create({
  removeImageWrapper: {
    position: 'absolute',
    top: 4,
    right: 4,
    zIndex: 1,
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 4,
    elevation: 2,
  },
  removeButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.black,
  },
  imageContainer: {
    position: 'relative',
    margin: 4,
    borderRadius: 8,
    overflow: 'hidden',
  },
});
