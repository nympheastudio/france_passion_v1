import { connect } from 'react-redux';

// Import Component
import Result from '@components/views/Etape/SearchBar/Result';

// Import actions
import { selectResult } from '@actions/search';
import { setLocation } from '@actions/map';

// Data / State
const mapStateToProps = (state) => ({
  results: state.search.results,
});

const mapDispatchToProps = (dispatch) => ({
  selectResult: (result) => {
    dispatch(selectResult(result));
  },
  setLocation: (lat, long) => {
    dispatch(setLocation(lat, long));
  },
});

// Map
const ResultContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Result);

// Export
export default ResultContainer;
