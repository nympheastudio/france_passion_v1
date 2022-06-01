import { connect } from 'react-redux';

// Import Component
import Chargement from '@components/views/Chargement';

// Import actions
import { loadLocalHosts } from '@actions/host';
import { loadLocalReviews } from '@actions/review';

// Data / State
const mapStateToProps = (state) => ({
  hosts: state.host.hosts,
  isLoading: state.host.isLoading,
});


const mapDispatchToProps = (dispatch) => ({
  loadLocalHosts: () => {
    dispatch(loadLocalHosts());
  },
  loadLocalReviews: () => {
    dispatch(loadLocalReviews());
  },
});

// Chargement
const ChargementContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Chargement);

// Export
export default ChargementContainer;
