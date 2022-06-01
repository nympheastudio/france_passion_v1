import { connect } from 'react-redux';

// Import Component
import AlertManager from '@components/partials/AlertManager';

// Import actions
import { dismissAlert } from '@actions/error';
import { disconnectUser } from '@actions/auth';

// Data / State
const mapStateToProps = (state) => ({
  errorCode: state.error.errorCode,
  errorMessage: state.error.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  dismissAlert: () => {
    dispatch(dismissAlert());
  },
  disconnectUser: () => {
    dispatch(disconnectUser());
  },
});

// AlertManager
const AlertManagerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlertManager);

// Export
export default AlertManagerContainer;
