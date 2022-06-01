// Import node modules
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity } from 'react-native';

// Import components
import TextCustom from '@components/partials/TextCustom';
import TextInputCustom from '@components/partials/TextInputCustom';

// Import files
import iconTarget from '@styles/images/icon-target_lock-blanc/icon-target_lock-blanc.png';
import iconSearch from '@styles/images/icon-search-blanc/icon-search-blanc.png';

// Import services
import { places, queryOptions } from '@services/SearchBar/Algolia';


// Import styles
import { searchBar } from '@styles/Themes';

const SearchBar = ({
  query,
  changeInputValue,
  saveResults,
  resetSearchBar,
  setLocation,
  userLocation,
  setMarkerSelected,
}) => {
  const [additionalProps, setAdditionalProps] = useState({});

 
  const searchResults = async (queryToSearch) => {
 
 
 /*    queryOptions.query = queryToSearch;
    places.search(queryOptions).then((queryResults) => {
      saveResults(queryResults);
      console.log('queryResults', queryResults);
    }).catch((error) => {
      console.log(error);
    });

*/

    let positionstackKey = '0de0fc85062fb81a1cccbcee1cbaa384';

    
    //For address input use forwardPGet
    const link = 'http://api.positionstack.com/v1/forward?access_key=0de0fc85062fb81a1cccbcee1cbaa384&query='
    +queryToSearch + '&country=FR';
    //this.forwardGeo + this.positionstackKey + this.query + '7509 S 2840 W, West Jordan, UT';
 //console.log(link);
    let search = await fetch(link)
    
    .then(response => response.json())
    .then(forwardResponse => 
      {
      saveResults(forwardResponse);
     // resetSearchBar();
      console.log(forwardResponse);
      })

    .catch((error) => {
      console.log(error);
    });



    
  };

  const handleFocus = () => {
    setAdditionalProps({});
    resetSearchBar();
    setMarkerSelected(null);
  };

  const handleChange = (text) => {
    changeInputValue(text);
    searchResults(text);
  };

  const handleBlur = () => setAdditionalProps({ selection: { start: 0, end: 0 } });

  const handleNearMeBtn = () => {
    if (userLocation.latitude && userLocation.longitude) {
      setLocation(userLocation.latitude, userLocation.longitude);
    }
    resetSearchBar();
    setMarkerSelected(null);
  };

  return (
    <View style={searchBar.mainContainer}>
      <View style={searchBar.searchContainer}>
        <Image source={iconSearch} style={searchBar.searchIcon} />
        <TextInputCustom
          style={searchBar.searchInput}
          onChangeText={(text) => handleChange(text)}
          value={query}
          placeholder={global.i18n.t('FORM_PAGE_ETAPE_BARRE_RECHERCHE')}
          placeholderTextColor={searchBar.placeholderTextColor.color}
          clearButtonMode="while-editing"
          onFocus={handleFocus}
          onBlur={handleBlur}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...additionalProps}
        />
        <TouchableOpacity style={searchBar.nearMeBtnContainer} onPress={handleNearMeBtn}>
          <Image source={iconTarget} />
          <TextCustom fontType="medium" style={searchBar.nearMeBtnLabel}>{global.i18n.t('BT_PAGE_ETAPE_AUTOUR_DE_MOI')}</TextCustom>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Validation
SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  saveResults: PropTypes.func.isRequired,
  resetSearchBar: PropTypes.func.isRequired,
  setLocation: PropTypes.func.isRequired,
  userLocation: PropTypes.object.isRequired,
  setMarkerSelected: PropTypes.func.isRequired,
};

// Export
export default SearchBar;
