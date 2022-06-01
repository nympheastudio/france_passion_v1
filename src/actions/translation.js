// Types
export const LOAD_LOCAL_TRANSLATIONS = 'LOAD_LOCAL_TRANSLATIONS';
export const LOAD_TRANSLATIONS = 'LOAD_TRANSLATIONS';
export const SAVE_TRANSLATIONS = 'SAVE_TRANSLATIONS';
export const SET_TRANSLATIONS = 'SET_TRANSLATIONS';

// Creators
export const loadLocalTranslations = () => ({
  type: LOAD_LOCAL_TRANSLATIONS,
});

export const loadTranslations = () => ({
  type: LOAD_TRANSLATIONS,
});

export const saveTranslations = (translations) => ({
  type: SAVE_TRANSLATIONS,
  translations,
});

export const setTranslations = (translations) => ({
  type: SET_TRANSLATIONS,
  translations,
});
