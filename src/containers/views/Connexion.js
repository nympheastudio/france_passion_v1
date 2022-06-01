import { connect } from 'react-redux';

// Import Component
import Connexion from '@components/views/Connexion';

// Import actions
import { changeValue, login } from '@actions/auth';

// Data / State
const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (field, value) => {
    dispatch(changeValue(field, value));
  },
  login: () => {
    dispatch(login());
  },
});


// Connexion
const ConnexionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Connexion);

// Export
export default ConnexionContainer;
