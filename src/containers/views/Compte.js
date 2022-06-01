import { connect } from 'react-redux';

// == Import Component
import Compte from '@components/views/Compte';

// == Import actions
import { disconnectUser } from '@actions/auth';

// == Data / State
const mapStateToProps = (state) => ({
  user: state.auth.user,
  reviews: state.review.userReviews,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(disconnectUser());
  },
});

// == Compte
const CompteContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Compte);

// == Export
export default CompteContainer;
