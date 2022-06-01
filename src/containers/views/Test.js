import { connect } from 'react-redux';

// Import Component
import Test from '@components/views/Test';

// Import actions
import { disconnectUser } from '@actions/auth';
import { generateError } from '@actions/error';

// Data / State
const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(disconnectUser());
  },
  generateError: (error) => {
    dispatch(generateError(error));
  },
});

// Test
const TestContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Test);

// Export
export default TestContainer;
