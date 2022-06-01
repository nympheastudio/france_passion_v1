// == Import npm
import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useFocusEffect } from '@react-navigation/native';

import { updateUser } from '@services/AsyncStorage/auth';

// == Import Component
import HostList from '@components/partials/HostList';
import Title from './Title';
import NoMarker from './NoMarker';


// == Composant
const Liste = ({ user, hosts }) => {
	
	
  const [favoriteMarkers, setFavoriteMarkers] = useState([]);

  const getFavoriteMarkers = () => {
    // Récupère les markers sous forme d'object grace aux id
    const favorites = user.favoris.map((favorisId) => hosts.find((host) => favorisId === host.id));
    // Ne retourne uniquemnet ceux non null ou undefined
    // (peut être le cas lorsque l'accueillant ferme, change d'état etc)
    return favorites.filter((favorite) => favorite);
  };

  // Au focus de la page, on set les favoris
  useFocusEffect(
    useCallback(() => {
      setFavoriteMarkers(getFavoriteMarkers().reverse());
      // On vide les favoris lors du unfocus de la page
      return () => setFavoriteMarkers([]);
    }, [user.favoris, hosts]),
  );

  useEffect(
    useCallback(() => {
      updateUser(user);
    }, [user.favoris]),
  );

  return (
    <HostList
      markers={favoriteMarkers}
      HeaderComponent={Title}
      EmptyComponent={NoMarker}
    />
  );
};

// == Validation
Liste.propTypes = {
  user: PropTypes.object.isRequired,
  hosts: PropTypes.array.isRequired,
};

// == Export
export default Liste;
