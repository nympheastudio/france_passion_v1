// import node modules
import { StyleSheet, Platform } from 'react-native';

// Import interfaces
import colors from './variables/color';
import size from './variables/size';
import { safeAreaViewTop } from './interfaces/safeAreaView';

export const etape = StyleSheet.create({
  safeAreaView: {
    ...safeAreaViewTop,
  },
  container: {
    flex: 1,
    // Comment out in order to stretch out the content in landscape mode
    // width: size.screenWidth,
    // height: size.screenHeight,
  },
  searchContainer: {
    padding: 15,
    flexDirection: 'row',
    backgroundColor: colors.primary,
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    padding: 15,
    paddingLeft: 45,
    color: 'white',
    backgroundColor: colors.primaryGreyed,
    height: '100%',
    flex: 1,
    borderRadius: 50,
  },
  placeholderTextColor: {
    color: '#8aa1c1',
  },
  nearMeBtnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  nearMeBtnLabel: {
    color: 'white',
  },
  mapContainer: {
    flex: 1,
    backgroundColor: 'lightgrey',
  },
  filterBtn: {
    position: 'absolute',
    right: 0,
    margin: 15,
  },
  filterText: {
    height: 55,
    width: 55,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 15,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    elevation: 3,
  },
  filtersNumberContainer: {
    width: 25,
    height: 25,
    backgroundColor: '#0089CF',
    borderRadius: 50,
    position: 'absolute',
    bottom: -8,
    right: -8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filtersNumberText: {
    color: 'white',
    fontSize: 14,
  },
  listBtn: {
    height: 55,
    width: 55,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 70,
    padding: 15,
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 15,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    elevation: 3,
  },
  btnImage: {
    resizeMode: 'contain',
  },
  calloutContainer: {
    position: 'absolute',
    width: size.screenWidth,
    marginTop: 15,
    elevation: 5,
    zIndex: 10,
  },
  scaleContainer: {
    width: size.screenWidth / 4,
    height: 21,
    position: 'absolute',
    bottom: 6,
    left: 5.5,
    backgroundColor: colors.initial,
    borderWidth: 2,
    borderTopWidth: 0,
    borderColor: colors.dark,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  scaleText: {
    color: '#3D3D3D',
    fontSize: 14,
    top: Platform.OS === 'ios' ? 0 : 2,
  },
  clusterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 52,
    height: 52,
    backgroundColor: colors.primaryLight,
    borderRadius: 100,
    padding: 5,
  },
  clusterText: {
    color: colors.initial,
    fontSize: 14,
    marginTop: 3,
  },
});

export default etape;
