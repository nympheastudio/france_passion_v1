// import node modules
import { StyleSheet } from 'react-native';

// Import interfaces
import colors from '@styles/Themes/variables/color';
// import size from '@styles/Themes/variables/size';

export const modal = StyleSheet.create({
  modalMainContainer: {
    backgroundColor: colors.initial,
    borderRadius: 20,
    padding: 20,
  },
  modalTitle: {
    fontSize: 22,
    marginBottom: 20,
  },
  modalOptionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  modalOptionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactiveIcon: {
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
  activeIcon: {
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
  activeText: { color: colors.secondary },
  inactiveText: {},
  divider: {
    height: 1,
    marginTop: 20,
    marginBottom: 23,
  },
  validateBtn: {
    justifyContent: 'center',
    height: 50,
    backgroundColor: colors.secondary,
    paddingHorizontal: 50,
    paddingVertical: 5,
    marginRight: -15,
    borderRadius: 50,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    elevation: 3,
  },
  validateBtnText: {
    color: 'white',
    fontSize: 16,
    letterSpacing: 1,
  },
  cancelBtn: {
    marginLeft: 15,
    color: colors.grey,
    letterSpacing: 1,
  },
});

export default modal;
