import { connect } from 'react-redux';

// Import Component
import Favoris from '@components/views/Favoris';

// Import actions

// Data / State
const mapStateToProps = (state) => ({
  user: state.auth.user,
  hosts: state.host.hosts,
});

const mapDispatchToProps = () => ({});

// Favoris
const FavorisContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Favoris);

// Export
export default FavorisContainer;
