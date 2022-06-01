// import node modules
import { StyleSheet } from 'react-native';

// Import interfaces
import color from './variables/color';

export const tabNavigator = StyleSheet.create({
  tabContainer: {
    backgroundColor: color.initial,
    height: 60,
    // Should not set fixed width here
    // width: size.screenWidth,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 7,
    paddingHorizontal: 5,
    shadowColor: color.black,
    shadowOpacity: 0.25,
    elevation: 11,
  },
  tab: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    alignContent: 'space-between',
  },
  tabIcon: {
    width: 30,
    height: 20,
    resizeMode: 'contain',
  },
  tabIconEtapes: {
    height: 22,
  },
  tabIconFavoris: {
    marginBottom: 0.5,
  },
  tabIconCompte: {
    height: 21,
  },
  activeText: {
    fontSize: 12,
    color: color.primaryLight,
    textAlign: 'center',
  },
  inactiveText: {
    fontSize: 12,
    color: color.black,
    textAlign: 'center',
  },
  subMenuContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: color.initial,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    shadowColor: color.black,
    shadowOpacity: 0.25,
    elevation: 10,
  },
  subMenuDividerr: {
    height: 2,
  },
  subMenuItemContainer: {
    marginTop: 16,
    marginBottom: 10,
    flexDirection: 'row',
  },
  subMenuItemIcon: {
    width: 20,
    resizeMode: 'contain',
    marginTop: 2,
  },
  subMenuItemText: {
    paddingLeft: 10,
    fontSize: 16,
  },

  test: {
    backgroundColor: '#000',
    width: 0,
  },
});

export default tabNavigator;
