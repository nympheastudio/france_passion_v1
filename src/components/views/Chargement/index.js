// Import node modules
import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';


// Import components
import Loader from '@components/partials/Loader';

// Import routes
import { PAGE_ETAPE } from '@components/navigations/routes';


const Chargement = ({
  hosts,
  isLoading,
  loadLocalHosts,
  loadLocalReviews,
}) => {
  const navigation = useNavigation();

  // Mount de Chargement
  useEffect(() => {
    if (!isLoading) {
      // On charge les accueillants et les avis
      loadLocalHosts();
      loadLocalReviews();
    }
  }, []);

  useFocusEffect(useCallback(() => {
    if (hosts.length > 0) {
      navigation.navigate(PAGE_ETAPE);
    }
  }, [hosts]));

  return (
    <View>
      <Loader message={global.i18n.t('TEXTE_TELECHARGEMENT_ACCUEILLANTS')} />
    </View>
  );
};

// Validation
Chargement.propTypes = {
  hosts: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  loadLocalHosts: PropTypes.func.isRequired,
  loadLocalReviews: PropTypes.func.isRequired,
};

// Export
export default Chargement;
