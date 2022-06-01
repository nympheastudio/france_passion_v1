// Types
export const SAVE_LANGUAGE = 'SAVE_LANGUAGE';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

// Creators
export const saveLanguage = (language) => ({
  type: SAVE_LANGUAGE,
  language,
});

export const changeLanguage = (language) => ({
  type: CHANGE_LANGUAGE,
  language,
});
