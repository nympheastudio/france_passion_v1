// import node modules
import { StyleSheet } from 'react-native';

// Import interfaces
import colors from '@styles/Themes/variables/color';
import { color } from 'react-native-reanimated';
// import size from '@styles/Themes/variables/size';

export const review = StyleSheet.create({
  overallMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  overallScoreIcon: {
    height: 22,
    width: 22,
    marginRight: 8,
    marginTop: -7,
    resizeMode: 'contain',
  },
  overallScoreText: {
    fontSize: 22,
    color: colors.secondary,
  },
  overallScoreEvalText: {
    fontSize: 16,
    color: colors.grey,
  },
  overallSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  overallSubTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  overallSubImage: {
    height: 22,
    width: 22,
    marginRight: 10,
    resizeMode: 'contain',
  },
  overallSubText: {
    fontSize: 18,
    color: 'black',
    marginTop: 3,
  },
  customerDivider: {
    height: 2,
    marginVertical: 10,
  },
  customerTopMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 7,
  },
  customerTopUserIconContainer: {
    backgroundColor: 'black',
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  customerTopUserIcon: {
    resizeMode: 'contain',
  },
  customerTopNameText: {
    fontSize: 18,
    textTransform: 'capitalize',
  },
  customerTopDateText: {
    fontSize: 14,
    color: colors.grey,
  },
  customerTopScoreContainer: {
    flexDirection: 'row',
  },
  customerTopSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  customerTopSubIcon: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
    marginRight: 4,
  },
  customerBotContainer: {
    marginLeft: 60,
  },
  customerBotMessageText: {
    color: colors.dark,
    fontSize: 17,
  },
  noReviewContainer: {
    marginTop: 15,
  },
  noReviewBtnContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  noReviewBtn: {
    backgroundColor: '#ED125F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  noReviewBtnText: {
    color: 'white',
    fontSize: 16,
  },
  noReviewText: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.grey,
    marginBottom: 5,
  },
  writeReviewBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 5,
  },
  writeReviewImageBtnContainer: {
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  writeReviewBtnImage: {
    resizeMode: 'contain',
  },
  writeReviewBtnText: {
    fontSize: 18,
    color: colors.primaryLight,
  },
  btnMore: {
      marginHorizontal: 15,
      marginTop: 20,
      backgroundColor: colors.secondary,
      borderRadius: 50,
      paddingHorizontal: 30,
      paddingVertical: 15,
      justifyContent: 'center',
      alignItems: 'center',
  },
  textMore: {
    color: colors.initial,
    fontSize: 16,
    letterSpacing: 1,
  },
});

export default review;
