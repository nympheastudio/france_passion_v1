import { connect } from 'react-redux';

// Import Component
import Info from '@components/views/Fiche/MyTabView/Routes/Info';

// Data / State
const mapStateToProps = (state) => ({
  userLocation: state.map.userLocation,
});

const mapDispatchToProps = () => ({});

// Info
const InfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Info);

// Export
export default InfoContainer;
