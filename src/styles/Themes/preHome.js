// import node modules
import { StyleSheet } from 'react-native';

// Import interfaces
import { safeAreaViewTop, safeAreaViewBottom } from './interfaces/safeAreaView';
import {
  base as viewPagerBase,
  textContainer,
  text as viewPagerText,
  dotIndicator,
} from './interfaces/viewPager';
import { colors } from 'react-native-elements';

export const preHome = StyleSheet.create({
  safeAreaViewTop: {
    ...safeAreaViewTop,
  },
  safeAreaViewBottom: {
    ...safeAreaViewBottom,
  },
  backgroundStyle: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  backgroundImageStyle: {
    resizeMode: 'cover',
  },
  btnSelectLanguage: { 
    borderColor: '#ccc', 
    borderWidth: 1, 
    borderRadius: 3,
    backgroundColor: 'rgba(0,0,0,.7)',
    paddingVertical: 5, 
    paddingHorizontal: 10,
    width: 60, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 10
  },
  topView: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomView: {
    backgroundColor: '#fff',
    width: '100%',
    height: '50%',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingBottom: '3%',
    alignItems: 'center',
  },
  title: {
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 15,
    fontSize: 26,
    lineHeight: 35,
    textAlign: 'center',
  },
  viewPagerContainer: {
    ...viewPagerBase,
  },
  viewPagerTextContainer: {
    ...textContainer,
    justifyContent: 'flex-start',

  },
  viewPagerText: {
    ...viewPagerText,
  },
  viewPagerDotIndicator: {
    ...dotIndicator,
    marginBottom: 20,
  },
  connexion: {
    backgroundColor: '#ed125f',
    padding: 10,
    width: 350,
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default preHome;
