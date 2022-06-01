// Import variables
import color from '../variables/color';
import size from '../variables/size';

// export const safeAreaView = {
//   backgroundColor: color.primary,
//   flex: 0,
// };

export const loaderFullScreen = {
  width: size.screenWidth,
  height: size.screenHeight,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color.primary,
};

export const loaderAbsolute = {
  position: 'absolute',
  left: 0,
  top: 0,
  zIndex: 100,
  backgroundColor: color.primary,
  opacity: 1,
};
