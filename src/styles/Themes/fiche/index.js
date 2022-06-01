// import node modules
import { StyleSheet } from 'react-native';

// Import interfaces
import colors from '../variables/color';
import size from '../variables/size';

export const fiche = StyleSheet.create({
  ficheScrollViewContainer: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  ficheScrollViewContentContainer: {
    minHeight: '100%',
  },
  ficheTopContainer: {
    padding: 15,
  },
  ficheTopImageContainer: {
    height: size.screenHeight * 0.27,
    backgroundColor: colors.lighter,
    borderRadius: 10,
  },
  ficheTopImage: {
    borderRadius: 10,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  ficheTopDefaultImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  ficheTopNoImage: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    // resizeMode: 'cover',
    width: '100%',
    height: '100%',
    backgroundColor: colors.light,
  },
  ficheTopBackBtn: {
    backgroundColor: colors.initial,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    margin: 15,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    elevation: 3,
  },
  ficheTopBackBtnIcon: {
    resizeMode: 'cover',
  },
  ficheTopFavBtn: {
    backgroundColor: colors.initial,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 5,
    margin: 15,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    elevation: 3,
  },
  ficheTopNoFavBtn: {
    backgroundColor: colors.secondary,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 5,
    margin: 15,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    elevation: 3,
  },
  ficheTopParkTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 7,
    backgroundColor: '#FFFFFF90',
    position: 'absolute',
    bottom: 0,
    borderBottomLeftRadius: 10,
  },
  ficheTopParkTimeIcon: {
    marginRight: 5,
    marginTop: -3,
  },
  ficheTopTimeIcon: {
    marginRight: 5,
    marginTop: -3,
    marginLeft: 15,
  },
  ficheTopDistContainer: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    alignItems: 'center',
  },
  ficheTopDistImageContainer: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
    marginVertical: 5,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    elevation: 3,
  },
  ficheTopDistText: {
    color: 'white',
    fontSize: 16,
  },
  ficheTopImageBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 10,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  ficheTopTitleMainContainer: {
    paddingVertical: 10,
  },
  ficheTopTitleCityText: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 28,
    lineHeight: 32,
    color: 'white',
    textTransform: 'uppercase',
  },
  ficheTopExploitationContainer: {
    width: '100%',
    marginTop: 7,
    alignItems: 'flex-start',
    flexDirection: 'row',
    // paddingRight: 20,
  },
  ficheTopExploitationImageContainer: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
  },
  ficheTopExploitationImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  ficheTopExploitationNameContainer: {
    marginLeft: 10,
    marginTop: 4,
    flex: 1,
  },
  ficheTopExploitationNom: {
    marginTop: 0,
    color: 'white',
    fontSize: 18,
    lineHeight: 20,
    textTransform: 'uppercase',
  },
  ficheTopEploitationPropriete: {
    color: 'white',
    fontSize: 18,
    lineHeight: 20,
    marginTop: 3,
  },
  tabViewContainer: {
    backgroundColor: colors.primary,
  },
  tabViewSceneContainer: {
    padding: 15,
    backgroundColor: colors.initial,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },
  tabBarMainContainer: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingTop: 5,
    margin: 0,
  },
  tabBarBtnActive: {
    marginRight: 35,
    borderBottomColor: colors.black,
    borderBottomWidth: 4,
    paddingBottom: 5,
  },
  tabBarBtn: {
    marginRight: 35,
    paddingBottom: 5,
  },
  tabBarBtnTextActive: {
    fontSize: 16,
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 0,
  },
  tabBarBtnTextInactive: {
    fontSize: 16,
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    opacity: 0.5,
  },
});

export default fiche;