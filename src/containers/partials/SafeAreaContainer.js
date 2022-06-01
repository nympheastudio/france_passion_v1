import { connect } from 'react-redux';

// Import Component
import SafeAreaContainer from '@components/partials/SafeAreaContainer';

// Import actions

// Data / State
const mapStateToProps = (state) => ({
  isCarouselActive: state.host.carousel.isActive,
});

const mapDispatchToProps = () => ({});

// SafeAreaContainer
const SafeAreaContainerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SafeAreaContainer);

// Export
export default SafeAreaContainerContainer;
