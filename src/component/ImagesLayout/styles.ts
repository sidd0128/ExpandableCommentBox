import { StyleSheet } from 'react-native';
import Spacing from '../../resources/Spacing';

export const styles = StyleSheet.create({
  imageLayoutWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: Spacing.xl / 2,
  },
  image: {
    borderRadius: 8,
    resizeMode: 'cover',
    maxHeight: 100,
  },
});
