// == Import npm
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const size = {
  screenWidth: width,
  screenHeight: height,
};

export default size;
