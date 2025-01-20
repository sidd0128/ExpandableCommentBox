import { StyleSheet } from 'react-native';
import shadowStyle from '../../helper/shadowStyle';
import Spacing from '../../resources/Spacing';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  parentContainer: {
    ...shadowStyle,
    minHeight: 90,
    width: '100%',
    backgroundColor: colors.gray5,
    borderTopLeftRadius: Spacing.s,
    borderTopRightRadius: Spacing.s,
    justifyContent: 'center',
    paddingHorizontal: Spacing.m,
    paddingTop: Spacing.xs,
  },
  imageColor: {
    tintColor: colors.white,
  },
  handlebar: {
    width: 47,
    height: 4,
    borderRadius: 10,
    marginBottom: Spacing.s,
    alignSelf: 'center',
    backgroundColor: colors.gray3,
  },
  bottomHandlebarContainer: {
    marginTop: Spacing.s,
  },
  childContainer: {
    backgroundColor: colors.white,
    borderTopLeftRadius: Spacing.xs,
    borderTopRightRadius: Spacing.xs,
    borderBottomLeftRadius: Spacing.xs,
    borderBottomRightRadius: Spacing.xs,
    borderColor: colors.gray3,
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    padding: Spacing.s,
  },
  textInputContainer: {
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  textImageWrapper: {
    backgroundColor: colors.white,
  },
  input: {
    minHeight: 40,
    paddingBottom: Spacing.m,
  },
  submitButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 4,
  },
  addImageButtonWrapper: {
    backgroundColor: colors.gray5,
    borderRadius: 100,
  },
  addMarginToSendButton: {
    alignSelf: 'flex-end',
    marginBottom: Spacing.xs + 2,
  },
  imagePlaceholder: {
    height: 100,
    width: 100,
    bottom: 0,
    marginLeft: -16,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  vectorIcon: {
    marginRight: 10,
  },
});
export default styles;
