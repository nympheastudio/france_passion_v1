// import node modules
import { StyleSheet } from 'react-native';

// Import interfaces
import colors from '@styles/Themes/variables/color';
// import size from '@styles/Themes/variables/size';


export const compte = StyleSheet.create({
  compteMainContainer: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  compteTopContainer: {
    padding: 15,
  },
  compteTopUserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 5,
    paddingRight: 15,
  },
  compteTopUserIconContainer: {
    backgroundColor: colors.black,
    borderRadius: 50,
    height: 65,
    width: 65,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  compteTopUserIcon: {
    height: '40%',
    width: '40%',
    resizeMode: 'contain',
  },
  compteTopUserTextInfo: {
    justifyContent: 'center',
    width: '80%',
  },
  compteTopUserName: {
    color: colors.initial,
    fontSize: 18,
  },
  compteTopUserEmail: {
    width: '100%',
    color: colors.light,
    lineHeight: 16,
    fontSize: 16,
    paddingTop: 2,
  },
  compteTopDivider: {
    height: 2,
    backgroundColor: colors.primaryGreyed,
    marginVertical: 20,
  },
  compteTopSubText: {
    color: 'white',
    fontSize: 16,
  },
  compteBotMainContainer: {
    flex: 1,
    marginTop: 5,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 3,
    padding: 15,
  },
  compteBotContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingRight: 25,
  },
  compteBotImage: {
    resizeMode: 'contain',
    marginRight: 10,
    marginTop: 1,
    width: 20,
  },
  compteBotText: {
    fontSize: 16,
  },
  compteBotSecondayBtnText: {
    color: colors.grey,
    fontSize: 16,
    marginTop: -4,
    marginBottom: -4,
    marginLeft: 31,
  },
  compteBotDivider: {
    height: 2,
    backgroundColor: colors.lighter,
    marginVertical: 15,
  },
  compteBotLogoutBtnText: {
    fontSize: 16,
    color: '#ED125F',
  },
});

export default compte;
