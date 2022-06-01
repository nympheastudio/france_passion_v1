import React, { createContext, useState } from 'react'
export const KeywordContext = createContext();

const KeywordContextProvider = (props) => {
    const [keyword] = useState('');

}
export default KeywordContextProvider