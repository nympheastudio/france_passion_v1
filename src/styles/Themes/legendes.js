// import node modules
import { StyleSheet } from 'react-native';

// Import interfaces
import colors from '@styles/Themes/variables/color';
// import size from '@styles/Themes/variables/size';

export const legendes = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  backBtnContainer: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: colors.primary,
  },
  backBtnImage: {
    marginRight: 10,
    marginTop: 2,
  },
  backBtnText: {
    marginTop: 5,
    color: colors.initial,
    fontSize: 18,
    textTransform: 'uppercase',
    letterSpacing: 0.2,
  },
  divider: {
    backgroundColor: colors.primaryGreyed,
    height: 2,
    marginBottom: 15,
  },
  itemsContainer: {
    paddingHorizontal: 15,
    marginBottom: 30,
  },
  titleText: {
    marginLeft: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    marginVertical: 5,
  },
  itemImageContainer: {
    marginRight: 10,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
  },
  itemImage: {
    resizeMode: 'contain',
    maxHeight: '50%',
    maxWidth: '50%',
    // height: '100%',
    // width: '100%',
  },
  itemLabelContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  itemLabel: {
    color: 'white',
    fontSize: 16,
  },
});

export default legendes;
