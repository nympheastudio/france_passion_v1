// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

// == Import styles
import { compte } from '@styles/Themes';
import { titre3 } from '@styles/Themes/interfaces/titres';
import { text } from '@styles/Themes/interfaces/text';
// == Import routes
import { connect, DispatchProp } from 'react-redux';

// == Import Component
import Compte from '@components/views/Compte';
import { disconnectUser } from '@actions/auth';

// == Import components
import TextCustom from '@components/partials/TextCustom';

// == Import icons
import userIcon from '@styles/images/icon-user-blanc/icon-user-blanc.png';


// == Composant
    const TopContent  = ({ reviews,logout ,  user }) => {
     
     
    



 
const handleDeletePress = async(user) => {
  
  
  console.log( user  );
  console.log('initiate delete account '+ user.email );
  //logout user
  
  if(user.email === ''){return;}
  //disconnect user
  //disconnectUser();
  //Alert.alert('Vous avez bien été déconnecté');


  //logout user
  //await logout();

  
  let url ='https://api.france-passion.com/public/desactivate_customer?email='+ user.email;
  let aPromise = await fetch(url, {
    method: "GET", // POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "text/plain;charset=UTF-8" // for a string body, depends on body
    },
    body: undefined ,// string, FormData, Blob, BufferSource, or URLSearchParams
    referrer: "about:client", // "" for no-referrer, or an url from the current origin
    referrerPolicy: "no-referrer-when-downgrade", // no-referrer, origin, same-origin...
    mode: "cors", // same-origin, no-cors
    credentials: "same-origin", // omit, include
    cache: "default", // no-store, reload, no-cache, force-cache, or only-if-cached
    redirect: "follow", // manual, error
    integrity: "", // a hash, like "sha256-abcdef1234567890"
    keepalive: false, // true
    signal: undefined, // AbortController to abort request
    window: window // null
  }).then(response => {
    console.log('response'+ response);
    
    logout();
    
    Alert.alert(
      'Suppression du compte éffectuée !',
      'Votre compte a été supprimé avec succès.',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
      );

     
    }
    
    ).catch(error => {
      console.log('error'+ error);
      Alert.alert(
        'Erreur',
        'Une erreur est survenue lors de la suppression du compte, veuillez nous contacter par email contact@france-passion.fr. Cordialement France Passion',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
        );
        
        
        
      });
      
    }

      let btn_supp = 'Supprimer mon compte';


      if(user.langue === 'fr'){

        btn_supp = 'Supprimer mon compte';
      }else if(global.i18n.locale === 'en'){
        btn_supp = 'Delete my account';
      }else if(global.i18n.locale === 'de'){
        btn_supp = 'Löschen Sie Ihr Konto';
      }
    
    return (
      <View style={compte.compteTopContainer}>
      <TextCustom fontType="bold" style={[text, titre3]}>{global.i18n.t('TITRE_COMPTE')}</TextCustom>
      <View style={compte.compteTopUserContainer}>
      <View style={compte.compteTopUserIconContainer}>
      <Image source={userIcon} style={compte.compteTopUserIcon} />
      </View>
      <View style={compte.compteTopUserTextInfo}>
      {(user.prenom || user.nom) && (
        <TextCustom numberOfLine={1} fontType="medium" style={compte.compteTopUserName}>
        {`${user.prenom ?? user.prenom} ${user.nom ?? user.nom}`}
        </TextCustom>
        )}
        <TextCustom numberOfLine={2} fontType="regular" style={compte.compteTopUserEmail}>
        {user.email}
        </TextCustom>
        </View>
        </View>
        <Divider style={compte.compteTopDivider} />
        <View>
        <TextCustom>
        <TextCustom style={compte.compteTopSubText}>{global.i18n.t('TEXTE_COMPTE_NUMERO_ADHERENT')} : </TextCustom>
        <TextCustom fontType="medium" style={compte.compteTopSubText}>
        {user.numero_carte_adherent}
        </TextCustom>
        </TextCustom>
        <TextCustom>
        <TextCustom style={compte.compteTopSubText}>{global.i18n.t('TEXTE_COMPTE_DATE_VALIDITE')} : </TextCustom>
        <TextCustom fontType="medium" style={compte.compteTopSubText}>
        {/*user.date_expiration_carte_adherent*/}{user.validite}
        </TextCustom>
        </TextCustom>
        <TouchableOpacity onPress={() => handleDeletePress(user)}>
        <TextCustom fontType="medium" style={compte.compteBotLogoutBtnText}>
        {btn_supp}
        </TextCustom>
        </TouchableOpacity>
        </View>
        </View>
        );
      }
        // == Validation
        TopContent.propTypes = {
          user: PropTypes.object.isRequired,
          logout: PropTypes.func.isRequired
        };
    
       
        // == Export
        export default TopContent;
        
        
        
        