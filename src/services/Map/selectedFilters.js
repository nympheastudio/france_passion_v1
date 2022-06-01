/* eslint-disable max-len */
// Fonction retournant le nombre de filtres totals sélectionnés
const getSelectedFilters = (filters) => {
  const selectedCategories = filters.categories.filter((filter) => filter.checked === true);
  const selectedCriteria = filters.criteria.filter((filter) => filter.checked === true);
  const selectedLanguages = filters.languages.filter((filter) => filter.checked === true);
  const selectedFilters = selectedCategories.length + selectedCriteria.length + selectedLanguages.length;
  return selectedFilters;
};

export default getSelectedFilters;
