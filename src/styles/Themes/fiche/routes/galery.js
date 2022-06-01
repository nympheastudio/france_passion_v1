// import node modules
import { StyleSheet } from 'react-native';

// Import interfaces
import colors from '@styles/Themes/variables/color';
import size from '@styles/Themes/variables/size';

// == Const definition
const colNumber = 3;
const gutter = 15;
const photoWidth = (size.screenWidth / colNumber) - ((colNumber + 1) * (gutter / colNumber));

// == Style
export const galery = StyleSheet.create({
  galeryMainContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: -15,
  },
  galeryPhotoBtn: {
    backgroundColor: colors.initial,
    height: photoWidth,
    width: photoWidth,
    borderRadius: 15,
    marginRight: 15,
    marginBottom: 15,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    elevation: 3,
  },
  galeryPhoto: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  carouselMainContainer: {
    height: '100%',
    width: size.screenWidth,
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  carouselBackBtnContainer: {
    position: 'absolute',
    top: 30,
    right: 35,
    zIndex: 100,
    backgroundColor: colors.initial,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselBackBtnIcon: {
    resizeMode: 'contain',
  },
  carouselFullImage: {
    height: '100%',
    width: '90%',
    marginLeft: '5%',
    resizeMode: 'contain',
  },
});

export default galery;
