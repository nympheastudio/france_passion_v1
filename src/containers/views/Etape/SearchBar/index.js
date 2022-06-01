import { connect } from 'react-redux';

// Import Component
import SearchBar from '@components/views/Etape/SearchBar';

// Import actions
import {
  saveResults,
  resetSearchBar,
  changeInputValue,
} from '@actions/search';
import { setLocation, setMarkerSelected } from '@actions/map';

// Data / State
const mapStateToProps = (state) => ({
  query: state.search.query,
  results: state.search.results,
  userLocation: state.map.userLocation,
});

const mapDispatchToProps = (dispatch) => ({

  
  saveResults: (results) => {
    //console.log('results' + results.data[0].administrative_area);
    dispatch(saveResults(results));
  },
  resetSearchBar: () => {
    dispatch(resetSearchBar());
  },
  setLocation: (latitude, longitude) => {
    dispatch(setLocation(latitude, longitude));
  },
  changeInputValue: (text) => {
    dispatch(changeInputValue(text));
  },
  setMarkerSelected: (marker) => {
    dispatch(setMarkerSelected(marker));
  },
});

// Map
const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);

// Export
export default SearchBarContainer;
