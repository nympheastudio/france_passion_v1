// import node modules
import { StyleSheet } from 'react-native';

// Import interfaces
import color from '@styles/Themes/variables/color';
import size from '@styles/Themes/variables/size';
import { colors } from 'react-native-elements';


export const contact = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    paddingHorizontal: 15,
  },
  formContainer: {
    flex: 1,
    marginVertical: 30,
  },
  inputMessage: {
    width: '100%',
    height: size.screenWidth / 100 * 75,
    backgroundColor: color.initial,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    textAlignVertical: 'top',
    color: colors.dark,
  },
  backBtnImage: {
    marginRight: 10,
    marginTop: 2,
  },
  contactTitle: {
    marginTop: 0,
  },
});

export default contact;
