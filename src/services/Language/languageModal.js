import { Alert } from 'react-native';

const languageChangeConfirmation = (confirmationPress, cancelPress) => {
  Alert.alert(
    global.i18n.t('TITRE_MODAL_CONFIRMATION_LANGUE'),
    global.i18n.t('MESSAGE_MODAL_CONFIRMATION_LANGUE'),
    [
      {
        text: global.i18n.t('BT_FICHE_TELEPHONE_ANNULER'),
        onPress: () => cancelPress(),
        style: 'cancel',
      },
      {
        text: global.i18n.t('BT_OUI'),
        onPress: () => confirmationPress(),
      },
    ],
    { cancelable: false },
  );
};

export default languageChangeConfirmation;
