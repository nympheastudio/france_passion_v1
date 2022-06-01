// import node modules
import { StyleSheet } from 'react-native';

// Import interfaces
import colors from '@styles/Themes/variables/color';
import size from '@styles/Themes/variables/size';

export const liste = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.primary,
  },
  titlePage: {
    paddingHorizontal: 15,
  },
  backBtnContainer: {
    width: size.screenWidth,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: colors.primary,
  },
  backBtnImage: {
    width: 30,
    height: 25,
    resizeMode: 'contain',
    marginRight: 12,
  },
  backBtnText: {
    marginTop: 5,
    color: colors.initial,
    fontSize: 18,
    textTransform: 'uppercase',
    letterSpacing: 0.2,
  },
  listDivider: {
    backgroundColor: colors.primaryGreyed,
    height: 2,
    marginBottom: 15,
  },
  cardListContainer: {
    backgroundColor: colors.primary,
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    marginHorizontal: 15,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    elevation: 12,
  },
  cardTopContainer: {
    backgroundColor: colors.light,
    height: 135,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  cardTopBackgroundImage: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  cardTopDefaultImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTopDefaultImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardMarkerDistanceContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderTopLeftRadius: 10,
  },
  cardMarkerdistanceIcon: {
    width: 17,
    height: 19,
    resizeMode: 'contain',
  },
  cardMarkerdistanceText: {
    color: '#ED125F',
    marginLeft: 5,
    marginTop: 3,
  },
  cardParkingTimeContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  cardParkingTimeText: {
    marginLeft: 5,
    marginTop: 3,
  },
  cardTimeImage: {
    marginLeft: 15,
  },
  cardReviewContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  cardReviewText: {
    color: colors.secondary,
    marginLeft: 5,
    marginTop: 4,
  },
  cardBottomContainer: {
    flex: 1,
    padding: 15,
    paddingBottom: 12,
  },
  cardAddressText: {
    fontSize: 20,
    lineHeight: 24,
    color: colors.black,
    marginBottom: 3,
  },
  cardExploitationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -7,
    marginBottom: 5,
  },
  cardExploitationImage: {
    marginRight: 5,
    resizeMode: 'contain',
  },
  cardExploitationText: {
    color: colors.dark,
    textTransform: 'uppercase',
    marginTop: 8,
    maxWidth: '99%',
    lineHeight: 15,
  },
  cardDescriptionText: {
    color: colors.dark,
    lineHeight: 15,
  },
  cardDivider: {
    height: 1.5,
    marginVertical: 5,
  },
  cardAccueilContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardAccueilText: {
    color: colors.dark,
    marginLeft: 5,
    marginTop: 3,
  },
  cardFavBtn: {
    position: 'absolute',
    right: 0,
    backgroundColor: colors.initial,
    margin: 7,
    padding: 15,
    borderRadius: 50,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    elevation: 3,
  },
  cardFavImage: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },
  moreContainer: {
    alignItems: 'flex-end',
  },
  moreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 2,
  },
  moreText: {
    color: colors.primaryLight,
    marginRight: 5,
  },
  moreIcon: {},
  noMarkerContainer: {
    height: size.screenHeight - 210,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noMarkerText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default liste;
