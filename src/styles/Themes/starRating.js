// import node modules
import { StyleSheet } from 'react-native';

// Import interfaces
// import colors from './variables/color';

export const starRating = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 15,
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  titleIcon: {
    width: 20,
    marginRight: 10,
    marginTop: -4,
    resizeMode: 'contain',
  },
  titleText: {
    color: 'white',
    fontSize: 18,
  },
  starsContainer: {
    flexDirection: 'row',
    marginLeft: 30,
  },
  starBtnContainer: {
    marginRight: 25,
  },
  starBtnIcon: {
    width: 35,
    height: 35,
  },

});

export default starRating;
