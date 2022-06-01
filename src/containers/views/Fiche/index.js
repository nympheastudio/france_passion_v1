import { connect } from 'react-redux';

// Import Component
import Fiche from '@components/views/Fiche';

// Data / State
const mapStateToProps = (state) => ({
  marker: state.map.markerSelected,
});

const mapDispatchToProps = () => ({});

// Fiche
const FicheContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Fiche);

// Export
export default FicheContainer;
