/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
// == Import npm
import React from 'react';
import { TextInput } from 'react-native';


// == Composant
const TextInputCustom = (props) => (
  <TextInput
    {...props}
    style={[{ fontFamily: 'Poppins', fontSize: 15 }, props.style]}
    adjustsFontSizeToFit={false}
    allowFontScaling={false}
  >
    {props.children}
  </TextInput>
);

// == Export
export default TextInputCustom;
