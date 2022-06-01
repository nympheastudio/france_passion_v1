// import node modules
import { StyleSheet } from 'react-native';

// Import interfaces
import colors from '@styles/Themes/variables/color';
import size from '@styles/Themes/variables/size';


export const filter = StyleSheet.create({
  RBSheetHeight: 550,
  RBSheetWrapper: {
    backgroundColor: 'rgba(19,19,29,0.8)',
  },
  RBSheetContainer: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  RBSheetDraggableIcon: {
    backgroundColor: 'lightgrey',
    width: 100,
    marginBottom: 20,
  },
  scrollViewContainer: {
    marginBottom: size.screenHeight / 8,
  },
  closeBtn: {
    backgroundColor: colors.initial,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 0,
    height: 50,
    width: 50,
    padding: 10,
    marginBottom: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    elevation: 3,
    position: 'absolute',
    right: 15,
    top: 25,
  },
  mainTitle: {
    fontSize: 30,
    color: colors.black,
    marginTop: 15,
  },
  filterTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },
  filterTitleIcon: {},
  filterTitleText: {
    color: colors.black,
    fontSize: 20,
    marginLeft: 10,
    marginTop: 5,
  },
  filterBtnWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginBottom: 15,
  },
  filterBtnMainContainer: {
    width: '33%',
  },
  langFilterBtnMainContainer: {
    width: '20%',
  },
  filterBtnContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  uncheckedIconContainer: {
    backgroundColor: colors.initial,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderColor: colors.initial,
    borderWidth: 3,
    height: 50,
    width: 50,
    marginBottom: 10,
    padding: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    elevation: 3,
    lineHeight: 10,
  },
  checkedIconContainer: {
    backgroundColor: colors.initial,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderColor: colors.secondary,
    borderWidth: 3,
    height: 50,
    width: 50,
    marginBottom: 10,
    padding: 10,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    elevation: 3,
    lineHeight: 10,
  },
  filterBtnIcon: {
    resizeMode: 'contain',
  },
  uncheckedFilterBtnLabel: {
    color: colors.black,
    textAlign: 'center',
    paddingHorizontal: 10,
    lineHeight: 15,
  },
  checkedFilterBtnLabel: {
    color: colors.secondary,
    textAlign: 'center',
    paddingHorizontal: 10,
    lineHeight: 15,
  },
  bottomBtnWrapper: {
    backgroundColor: colors.initial,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: size.screenWidth,
    height: size.screenHeight / 8,
    padding: 15,
    margin: 0,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    elevation: 12,
  },
  bottomBtn1: {
    backgroundColor: colors.initial,
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  bottomBtnText1: {
    color: colors.grey,
    letterSpacing: 1,
  },
  bottomBtn2: {
    backgroundColor: colors.secondary,
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 50,
  },
  bottomBtnText2: {
    color: colors.initial,
    letterSpacing: 1,
  },
});

export default filter;
