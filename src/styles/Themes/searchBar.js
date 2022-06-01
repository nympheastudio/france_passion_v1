// import node modules
import { StyleSheet } from 'react-native';

// Import interfaces
import colors from './variables/color';

export const searchBar = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.primary,
    height: 80,
    zIndex: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    position: 'absolute',
    top: '63%',
    left: 30,
    zIndex: 5,
  },
  searchInput: {
    paddingTop: 14,
    paddingBottom: 10,
    paddingLeft: 45,
    paddingRight: 15,
    color: 'white',
    backgroundColor: colors.primaryGreyed,
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  resultsContainer: {
    height: 185,
    width: '100%',
    backgroundColor: '#204c95',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    position: 'absolute',
    top: 0,
    paddingBottom: 0,
    transform: [{ translateY: 80 }],
  },
  resultsFlatList: {
    height: '100%',
    width: '100%',
    zIndex: 11,
    paddingLeft: 15,
    paddingRight: 20,
  },
  resultsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginBottom: 8,
  },
  resultsItemIcon: {
    marginTop: -3,
    marginRight: 10,
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  resultsTextContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflow: 'hidden',
    marginRight: 0,
    paddingTop: 0,
  },
  resultsTextHighlight: {
    color: 'white',
    fontSize: 17,
  },
  resultsTextLowlight: {
    color: colors.light,
    overflow: 'hidden',
    marginLeft: 0,
    paddingBottom: 0,
    marginTop: -8,
    fontSize: 13,
  },
  linearGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 50,
    zIndex: 20,
    borderRadius: 25,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
});

export default searchBar;
