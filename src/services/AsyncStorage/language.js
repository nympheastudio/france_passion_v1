import AsyncStorage from '@react-native-async-storage/async-storage';

// Fonction retournant la language de l'app depuis d'AsyncStorage
const getLanguageStored = async () => {
  const language = await AsyncStorage.getItem('language');
  return language;
};

// Fonction retournant la langue de l'app depuis l'AsyncStorage si elle existe
// Sinon retourne la langue fournie (depuis user ou mon compte)
export const getAppLanguage = async (language) => {
  const storedLanguage = await getLanguageStored();
  if (storedLanguage && storedLanguage !== null) {
    return storedLanguage;
  }
  return language;
};

// Fonction stockant la langue de l'app dans l'AsyncStorage
export const storeLanguageData = async (language) => {
  await AsyncStorage.setItem('language', language);
};
