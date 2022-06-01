/* eslint-disable global-require */
// Actions
import {
  TOGGLE_CATEGORY_FILTER,
  TOGGLE_CRITERIA_FILTER,
  TOGGLE_LANGUAGE_FILTER,
  TOGGLE_KEYWORD_FILTER,
  RESET_FILTERS,
} from '@actions/filter';

// initial state
const initialState = {
  
  keyword: [
    { name: 'BT_FILTRES_KEYWORD', checked: false, icon: require('@styles/images/icon-fermier-noir/icon-fermier-noir.png'), value:'' },

  ],
  
  categories: [
    { name: 'BT_FILTRES_FERMIER', checked: false, icon: require('@styles/images/icon-fermier-noir/icon-fermier-noir.png') },
    { name: 'BT_FILTRES_VIGNERON', checked: false, icon: require('@styles/images/icon-vigneron-noir/icon-vigneron-noir.png') },
    { name: 'BT_FILTRES_AUTRE_ACTIVITE', checked: false, icon: require('@styles/images/icon-autres-noir/icon-autres-noir.png') },
  ],
  criteria: [
    { name: 'BT_FILTRES_REPAS_SUR_PLACE', checked: false, icon: require('@styles/images/icon-cutlery-noir/icon-cutlery-noir.png') },
    { name: 'BT_FILTRES_BIO', checked: false, icon: require('@styles/images/logo-ab/logo-ab.png') },
    { name: 'BT_FILTRES_LABEL_HANDICAP', checked: false, icon: require('@styles/images/logo-tourisme-handicap/logo-tourisme-handicap.png') },
    { name: 'BT_FILTRES_GRANDS_CC', checked: false, icon: require('@styles/images/icon-grands_cc-noir/icon-grands_cc-noir.png') },
    { name: 'BT_FILTRES_ACTIVITES_SUR_PLACE', checked: false, icon: require('@styles/images/icon-camera_alt-noir/icon-camera_alt-noir.png') },
  ],
  languages: [
    { name: 'en', checked: false, icon: require('@styles/images/drapeau-en/drapeau-en.png') },
    { name: 'it', checked: false, icon: require('@styles/images/drapeau-it/drapeau-it.png') },
    { name: 'de', checked: false, icon: require('@styles/images/drapeau-de/drapeau-de.png') },
    { name: 'es', checked: false, icon: require('@styles/images/drapeau-es/drapeau-es.png') },
    { name: 'nl', checked: false, icon: require('@styles/images/drapeau-nl/drapeau-nl.png') },
  ],
};

// reducer
const Filters = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_CATEGORY_FILTER: {
      const categories = [...state.categories];
      categories[action.filterId] = {
        ...categories[action.filterId],
        checked: !categories[action.filterId].checked,
      };
      return {
        ...state,
        categories,
      };
    }
    case TOGGLE_CRITERIA_FILTER: {
      const criteria = [...state.criteria];
      criteria[action.filterId] = {
        ...criteria[action.filterId],
        checked: !criteria[action.filterId].checked,
      };
      return {
        ...state,
        criteria,
      };
    }
	case TOGGLE_KEYWORD_FILTER: {
      const keyword = [...state.keyword];
      keyword[action.filterId] = {
        ...keyword[action.filterId],
        checked: !keyword[action.filterId].checked,
		//value: keyword.value,
      };
	  

	  
      return {
        ...state,
        keyword,
      };
    }
    case TOGGLE_LANGUAGE_FILTER: {
      const languages = [...state.languages];
      languages[action.filterId] = {
        ...languages[action.filterId],
        checked: !languages[action.filterId].checked,
      };
      return {
        ...state,
        languages,
      };
    }
    case RESET_FILTERS:
      return {
        ...initialState,
      };
    // Action non-reconnue
    default:
      return state;
  }
};

// export
export default Filters;
