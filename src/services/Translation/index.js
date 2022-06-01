import { Axios } from "@store/middlewares/webFetchMiddleware";
import {
  getTranslationsDataStored,
  storeTranslationsData,
} from "@services/AsyncStorage/translation";

import { API_KEY } from "@app/app.config";

// Fonction retournant les traductions depuis une requête AJAX
// et les stockant dans le FileSystem
export const fetchTranslations = async () => {
  // Not try to catch here instead catch in function which
  // calls fetchTranslations
  // try {
  const dataFetch = await Axios({
    method: "GET",
    url: "translation",
    headers: {
      "api-key": API_KEY,
    },
  });

  await storeTranslationsData(dataFetch.data);

  // } catch (err) {
  //   console.log(err);
  // }

  return dataFetch;
};

// Fonction retournant les traduction depuis le FileSystem
export const loadTranslations = async () => {
  const dataStore = await getTranslationsDataStored();
  return dataStore;
};
