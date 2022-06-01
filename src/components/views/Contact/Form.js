// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ActivityIndicator,
  View,
  Switch,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// == Import routes
import { PAGE_CONTACT_VALIDATION } from '@components/navigations/routes';

// Import utilities
import { Axios } from '@store/middlewares/webFetchMiddleware';

// import components
import TextInputCustom from '@components/partials/TextInputCustom';
import TextCustom from '@components/partials/TextCustom';

// Import Style
import { contact, connexion } from '@styles/Themes';
import { text } from '@styles/Themes/interfaces/text';
import { base } from '@styles/Themes/interfaces/button';

// == Composant
const Form = ({
  token,
  deviceId,
  hostId,
  generateError,
}) => {
  const [wantCopy, setWantCopy] = useState(false);
  const [message, setMessage] = useState(null);
  const navigation = useNavigation();
  const [disabled,setDisabled]=useState(false);

  
  const toggleWantCopy = () => setWantCopy(!wantCopy);

  const submit = () => {
    
    // set the state for disabling or enabling the button
 /*   if(ifSomeConditionReturnsTrue)
    {
        this.setState({ Isbuttonenable : true })
    }
  else
  {
     this.setState({ Isbuttonenable : false})
  }*/

  //console.log(this.props);
  //this.props.setState({ Isbuttonenable : false});
  setDisabled(!disabled);
 // alert('submit');
/*
  setTimeout(function () {
    setDisabled(false);
}, 10000);

 */
    //setDisabled(disabled);
  
    Axios({
      method: 'POST',
      url: 'contact',
      headers: {
        token,
        'device-id': deviceId,
      },
      data: {
        message,
        send_copy: wantCopy,
        host_id: hostId,
      },
    }).then(() => {
      navigation.navigate(PAGE_CONTACT_VALIDATION);
      setDisabled(false);
      
    }).catch((error) => {
      if (error.response) {
        generateError(error.response.status, error.response.data.error);
      } else {
        generateError(500);
      }
    });

  };

  /*
       <View style={{ flexDirection: 'row', marginVertical: 20 }}>
        <View style={{ backgroundColor: wantCopy ? '#0089cf' : '#fff', borderRadius: 50, alignSelf: 'flex-start' }}>
          <Switch
            trackColor={{ false: 'transparent', true: 'transparent' }}
            thumbColor={wantCopy ? '#0089cf' : '#fff'}
            ios_backgroundColor="#0089cf"
            onValueChange={toggleWantCopy}
            value={wantCopy}
          />
        </View>
        <TextCustom style={[text, { marginHorizontal: 10, flexShrink: 1 }]}>
          {global.i18n.t('FORM_CONTACT_COPIE_MESSAGE')}
        </TextCustom>
      </View>
      */

  return (
    <View style={contact.formContainer}>
      <TextInputCustom
        style={contact.inputMessage}
        autoCompleteType="off"
        multiline
        placeholder={global.i18n.t('FORM_CONTACT_MESSAGE')}
        placeholderTextColor="#aaa"
        onChange={(event) => setMessage(event.nativeEvent.text)}
      />

<View style={{ flexDirection: 'row', marginVertical: 60 }}>
</View>
      <TouchableOpacity
        style={connexion.connexionBtn}
        onPress={submit}
        disabled={disabled}
    
      >
        <TextCustom style={{ ...base, ...connexion.textBtn }}>
         {disabled? <ActivityIndicator size="small" color="#fff" /> :global.i18n.t('BT_CONTACT_ENVOYER')} 
        </TextCustom>
      </TouchableOpacity>
    </View>
  );
};

Form.propTypes = {
  token: PropTypes.string.isRequired,
  deviceId: PropTypes.string.isRequired,
  hostId: PropTypes.number,
  generateError: PropTypes.func.isRequired,
};

Form.defaultProps = {
  hostId: null,
};

// == Export 
export default Form;
