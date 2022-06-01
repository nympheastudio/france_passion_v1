// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Switch,
  TouchableOpacity,
} from 'react-native';

// == Import Styles
import { avisDeposer } from '@styles/Themes';

// == Import components
import TextCustom from '@components/partials/TextCustom';
import TextInputCustom from '@components/partials/TextInputCustom';

// == Composant
const Form = ({
  message,
  setMessage,
  isPublic,
  setIsPublic,
  handleCancelPress,
  handleValidationPress,
}) => (
  <>
    <View>
      <TextInputCustom
        value={message}
        style={avisDeposer.textInput}
        autoCompleteType="off"
        multiline
        placeholder={global.i18n.t('MESSAGE_DEPOSER_AVIS')}
        placeholderTextColor="#aaa"
        onChange={(event) => setMessage(event.nativeEvent.text)}
      />
      {message !== null && (
        <TextCustom
          style={message.length > 1100
            ? avisDeposer.activeWordCounter
            : avisDeposer.inactiveWordCounter}
        >
          {message.length}/1100
        </TextCustom>
      )}
    </View>

    <View style={avisDeposer.switchSectionContainer}>
      <View
        style={{
          backgroundColor: isPublic ? '#0089cf' : '#fff',
          borderRadius: 50,
          alignSelf: 'flex-start',
          marginRight: 15,
        }}
      >
        <Switch
          trackColor={{ false: 'transparent', true: 'transparent' }}
          thumbColor={isPublic ? '#0089cf' : '#fff'}
          ios_backgroundColor="#0089cf"
          onValueChange={() => setIsPublic(!isPublic)}
          value={isPublic}
        />
      </View>
      <TextCustom style={avisDeposer.switchText}>
        {global.i18n.t('FORM_PARTAGER_COMMUNAUTE_FP')}
      </TextCustom>
    </View>

    <TextCustom style={avisDeposer.introText}>
      {global.i18n.t('TEXTE_DEPOSER_AVIS_OUTRO')}
    </TextCustom>

    <View style={avisDeposer.btnContainer}>
      <TouchableOpacity style={avisDeposer.cancelBtn} onPress={handleCancelPress}>
        <TextCustom style={{ ...avisDeposer.btnText, ...avisDeposer.cancelText }}>
          {global.i18n.t('BT_DEPOSER_AVIS_ANNULER')}
        </TextCustom>
      </TouchableOpacity>
      <TouchableOpacity style={avisDeposer.validateBtn} onPress={handleValidationPress}>
        <TextCustom style={avisDeposer.btnText}>
          {global.i18n.t('BT_DEPOSER_AVIS_ENVOYER')}
        </TextCustom>
      </TouchableOpacity>
    </View>
  </>
);

// == Validation
Form.propTypes = {
  message: PropTypes.string,
  setMessage: PropTypes.func.isRequired,
  isPublic: PropTypes.bool.isRequired,
  setIsPublic: PropTypes.func.isRequired,
  handleCancelPress: PropTypes.func.isRequired,
  handleValidationPress: PropTypes.func.isRequired,
};

Form.defaultProps = {
  message: null,
};

// == Export
export default Form;
