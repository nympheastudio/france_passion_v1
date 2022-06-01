import { connect } from 'react-redux';

// Import Component
import Router from '@components/navigations/Router';

// Data / State
const mapStateToProps = (state) => ({
  isInternetReachable: state.device.isInternetReachable,
  isConnected: state.auth.isConnected,
  error: state.error,
  isCarouselActive: state.host.carousel.isActive,
  language: state.language.langue,
});

const mapDispatchToProps = () => ({});

// Connexion
const RouterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Router);

// Export
export default RouterContainer;
