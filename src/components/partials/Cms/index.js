// == Import npm
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';
import { useFocusEffect } from '@react-navigation/native';

// Import utilities
import { Axios } from '@store/middlewares/webFetchMiddleware';

// Import component
import Loader from '@components/partials/Loader';
import Error from '@components/partials/Error';

// Import Styles
import color from '@styles/Themes/variables/color';

// == Composant
const Cms = ({
  token,
  deviceId,
  language,
  pageType,
  generateError,
}) => {
  const [html, setHtml] = useState('');
  const [hasError, setHasError] = useState(false);

  useFocusEffect(useCallback(() => {
    Axios({
      method: 'GET',
      url: `cms?type_cms=${pageType}&language=${language}`,
      headers: {
        token,
        'device-id': deviceId,
      },
    }).then((response) => {
      setHasError(false);
      setHtml(response.data.html);
    }).catch((error) => {
      setHasError(true);
      if (error.response) {
        generateError(error.response.status, error.response.data.error);
      } else {
        generateError(500);
      }
    });
  }, [language]));

  return (
    <>
      {!html && !hasError && <Loader />}
      {hasError && <Error message="MESSAGE_ERREUR_RESSOURCES" />}
      <WebView style={{ backgroundColor: color.primary }} useWebKit source={{ html }} />
    </>
  );
};

Cms.propTypes = {
  token: PropTypes.string.isRequired,
  deviceId: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  pageType: PropTypes.string.isRequired,
  generateError: PropTypes.func.isRequired,
};

// == Export
export default React.memo(Cms);
