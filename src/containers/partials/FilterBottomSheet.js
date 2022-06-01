import { connect } from 'react-redux';

// Import Component
import FilterBottomSheet from '@components/partials/FilterBottomSheet';

// Import actions
import {
  toggleKeywordFilter,
  toggleCategoryFilter,
  toggleCriteriaFilter,
  toggleLanguageFilter,
  resetFilters,
} from '@actions/filter';

// Data / State
const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  
  toggleKeywordFilter: (filterId) => {
    dispatch(toggleKeywordFilter(filterId));
  },
  
  toggleCategoryFilter: (filterId) => {
    dispatch(toggleCategoryFilter(filterId));
  },
  toggleCriteriaFilter: (filterId) => {
    dispatch(toggleCriteriaFilter(filterId));
  },
  toggleLanguageFilter: (filterId) => {
    dispatch(toggleLanguageFilter(filterId));
  },
  resetFilters: (filterId) => {
    dispatch(resetFilters(filterId));
  },
});

// FilterBottomSheet
const FilterBottomSheetContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterBottomSheet);

// Export
export default FilterBottomSheetContainer;
