// import node modules
import { StyleSheet } from 'react-native';

// Import interfaces
import colors from '@styles/Themes/variables/color';
// import size from '@styles/Themes/variables/size';

export const avisDeposer = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  topMainContainer: {
    paddingHorizontal: 15,
  },
  topTitle: {
    color: 'white',
    fontSize: 24,
    marginVertical: 10,
  },
  topHostContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  topHostImageContainer: {
    height: 65,
    width: 65,
    backgroundColor: colors.light,
    borderRadius: 10,
    marginRight: 15,
  },
  topHostImage: {
    flex: 1,
    borderRadius: 10,
  },
  topHostCityText: {
    color: colors.initial,
    fontSize: 18,
  },
  topHostNameText: {
    color: colors.initial,
    fontSize: 18,
    lineHeight: 19,
  },
  divider: {
    height: 2,
    backgroundColor: colors.primaryLight,
    opacity: 0.2,
    marginVertical: 20,
  },
  titleText: {
    paddingHorizontal: 15,
    fontSize: 18,
    color: colors.initial,
    marginBottom: 10,
  },
  introText: {
    paddingHorizontal: 15,
    fontSize: 16,
    color: colors.light,
    marginBottom: 20,
  },
  textInput: {
    marginHorizontal: 15,
    marginVertical: 10,
    height: 300,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 45,
    borderRadius: 10,
    textAlignVertical: 'top',
    color: 'black',
  },
  iconRating: {
    position: 'absolute',
    marginTop: 100,
  },
  inactiveWordCounter: {
    position: 'absolute',
    bottom: 15,
    right: 25,
    padding: 5,
    color: colors.light,
    backgroundColor: colors.initial,
  },
  activeWordCounter: {
    position: 'absolute',
    bottom: 18,
    right: 35,
    padding: 5,
    color: colors.secondary,
    backgroundColor: colors.initial,
  },
  switchSectionContainer: {
    flexDirection: 'row',
    marginVertical: 25,
    paddingHorizontal: 15,
  },
  switchText: {
    color: colors.initial,
    fontSize: 16,
    flex: 1,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 10,
    marginBottom: 40,
  },
  cancelBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 50,
    marginRight: 20,
  },
  cancelText: {
    opacity: 0.5,
  },
  validateBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 50,
  },
  reviewBtn: {
    marginHorizontal: 15,
    marginTop: 30,
    backgroundColor: colors.secondary,
    borderRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: colors.initial,
    fontSize: 16,
    letterSpacing: 1,
  },
  validationBtn: {
    marginHorizontal: 15,
    backgroundColor: colors.secondary,
    borderRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default avisDeposer;
