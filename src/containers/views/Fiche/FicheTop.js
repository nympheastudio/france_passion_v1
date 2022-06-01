import { connect } from 'react-redux';

// Import Component
import FicheTop from '@components/views/Fiche/FicheTop';

// Import actions
import { deleteUserFavorite, saveUserFavorite } from '@actions/auth';

// Data / State
const mapStateToProps = (state) => ({
  userLocation: state.map.userLocation,
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  saveUserFavorite: (id) => {
    dispatch(saveUserFavorite(id));
  },
  deleteUserFavorite: (id) => {
    dispatch(deleteUserFavorite(id));
  },
});

// Fiche
const FicheTopContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FicheTop);

// Export
export default FicheTopContainer;
