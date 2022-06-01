/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
// == Import npm
import React from 'react';
import { Text } from 'react-native';


// == Composant
const TextCustom = (props) => {
  const fontFamily = () => {
    switch (props.fontType) {
      case 'bold':
        return 'Poppins-Bold';
      case 'medium':
        return 'Poppins-Medium';
      default:
        return 'Poppins-Regular';
    }
  };
  return (
    <Text
      {...props}
      style={
        !props.defaultFont
          ? [{ fontFamily: fontFamily(), fontSize: 14 }, props.style]
          : [{ fontSize: 14 }, props.style]
      }
      adjustsFontSizeToFit={false}
      allowFontScaling={false}
    >
      {props.children}
    </Text>
  );
};

// == Export
export default TextCustom;
