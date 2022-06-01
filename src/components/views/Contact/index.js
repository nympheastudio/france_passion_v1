// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// Import components
import TopContent from '@components/views/Contact/TopContent';
import Form from '@components/views/Contact/Form';

// Import Style
import { contact } from '@styles/Themes';

// == Composant
const Contact = ({
  token,
  deviceId,
  route,
  generateError,
}) => {
  // Scrollview non maitrisée sur iOS
  // nécessité d'utiliser KeyboardAwareScrollViews pour gérer Scroll et Keyboard
  const Container = Platform.OS === 'ios' ? KeyboardAwareScrollView : ScrollView;

  return (
    <Container
      style={contact.container}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      viewIsInsideTabBar={false}
      extraScrollHeight={-50}
    >
      <TopContent />
      <Form
        token={token}
        deviceId={deviceId}
        generateError={generateError}
        hostId={route.params ? route.params.hostId : null}
      />
    </Container>
  );
};

Contact.propTypes = {
  token: PropTypes.string.isRequired,
  deviceId: PropTypes.string.isRequired,
  route: PropTypes.object.isRequired,
  generateError: PropTypes.func.isRequired,
};

// == Export
export default Contact;
