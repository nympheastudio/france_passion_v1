import { connect } from 'react-redux';

// Import Component
import LanguageModal from '@components/partials/LanguageModal';

// Import actions
import { saveLanguage } from '@actions/language';

// Data / State
const mapStateToProps = (state) => ({
  language: state.language.langue,
});

const mapDispatchToProps = (dispatch) => ({
  saveLanguage: (language) => {
    dispatch(saveLanguage(language));
  },
});

// LanguageModal
const LanguageModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LanguageModal);

// Export
export default LanguageModalContainer;
