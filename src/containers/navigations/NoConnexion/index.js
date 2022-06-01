import { connect } from 'react-redux';

// Import Component
import NoConnexion from '@components/navigations/NoConnexion';

// Import actions

// Data / State
const mapStateToProps = (state) => ({
  isConnected: state.device.isConnected,
});

const mapDispatchToProps = () => ({});

// Connexion
const NoConnexionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoConnexion);

// Export
export default NoConnexionContainer;
