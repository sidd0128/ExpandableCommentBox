import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  chatContainer: {
    padding: 10,
  },
  messageWrapper: {
    marginVertical: 5,
    maxWidth: '70%',
    borderRadius: 10,
    padding: 10,
  },
  leftMessage: {
    alignSelf: 'flex-start',
    backgroundColor: colors.yellow,
  },
  rightMessage: {
    alignSelf: 'flex-end',
    backgroundColor: colors.green,
  },
  messageText: {
    color: colors.white,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 5,
  },
  commentInputBoxWrapper: {
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    backgroundColor: colors.white,
    padding: 10,
  },
});
export default styles;
