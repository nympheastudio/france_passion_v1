import { connect } from 'react-redux';

// Import Component
import Etape from '@components/views/Etape';

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

// Etape
const EtapeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Etape);

// Export
export default EtapeContainer;
