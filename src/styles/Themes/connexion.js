// import node modules
import { StyleSheet } from 'react-native';

// Import interfaces
import colors from '@styles/Themes/variables/color';
import { safeAreaViewTop, safeAreaViewBottom } from './interfaces/safeAreaView';
import { base as baseInput, placeholder } from './interfaces/input';
import {
  base100 as baseBtn,
  initial,
  secondary,
  noBg,
  rounded,
  textBase as textBtn,
  textInitial,
  textPrimaryLight,
} from './interfaces/button';


export const connexion = StyleSheet.create({
  safeAreaViewTop: {
    ...safeAreaViewTop,
  },
  safeAreaViewBottom: {
    ...safeAreaViewBottom,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.primary,
  },
  logoContainer: {
    paddingTop: '20%',
    paddingBottom: '10%',
    width: '100%',
    alignItems: 'center',
  },
  text: {
    padding: 15,
    color: colors.initial,
  },
  form: {
    flex: 1,
    width: '100%',
    padding: 15,
  },
  input: {
    ...baseInput,
  },
  placeholder: {
    ...placeholder,
  },
  connexionBtn: {
    ...baseBtn,
    ...secondary,
    ...rounded,
  },
  resetMdp: {
    ...baseBtn,
    ...noBg,
    ...rounded,
  },
  textBtn: {
    ...textBtn,
    ...textInitial,
    letterSpacing: 1,
  },
  createAccountBtn: {
    ...baseBtn,
    ...initial,
  },
  textBtnBlue: {
    ...textBtn,
    ...textPrimaryLight,
    padding: 20,
  },
});

export default connexion;
