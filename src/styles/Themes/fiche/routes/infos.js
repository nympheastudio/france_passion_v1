// import node modules
import { StyleSheet } from 'react-native';

// Import interfaces
import colors from '@styles/Themes/variables/color';
import size from '@styles/Themes/variables/size';


export const infos = StyleSheet.create({
  accessibilityContainer: {
    flexDirection: 'row',
  },
  accessibilityPictoItemsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '85%',
    marginBottom: 5,
  },
  accessibilityPhoneBtn: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 13,
    borderRadius: 50,
    backgroundColor: colors.initial,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    elevation: 3,
  },
  accessibilityPhoneIcon: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  pictoItemContainer: {
    marginTop: 10,
    marginRight: 25,
    marginBottom: 15,
  },
  infoAccueilContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingRight: 30,
  },
  infoAccueilImage: {
    marginRight: 10,
    marginTop: 4,
  },
  infoAccueilText: {
    color: colors.dark,
    fontSize: 16,
  },
  infoDivider: {
    height: 1.5,
    marginBottom: 15,
  },
  infoItemTitleContainer: {
    flexDirection: 'row',
  },
  infoItemTitleIcon: {
    height: 22,
    resizeMode: 'contain',
    width: 22,
    marginRight: 15,
    marginTop: 2,
  },
  infoItemTitleText: {
    fontSize: 18,
  },
  infoItemBasicContent: {
    marginLeft: 37,
    color: colors.dark,
    marginBottom: 15,
    fontSize: 16,
  },
  mapItemMainContainer: {
    backgroundColor: colors.dark,
    height: 250,
    marginLeft: -15,
    marginTop: 10,
    marginBottom: -15,
    width: size.screenWidth,
    alignItems: 'center',
  },
  mapItemMapStyle: {
    width: '100%',
    height: '100%',
  },
  mapItemGotoBtn: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.secondary,
    paddingHorizontal: 45,
    paddingTop: 11,
    paddingBottom: 9,
    borderRadius: 50,
    marginBottom: 15,
  },
  mapItemGotoBtnText: {
    color: 'white',
    fontSize: 16,
    letterSpacing: 1,
  },
});

export default infos;
