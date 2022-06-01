// Import node modules
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import routes
import { PAGE_LISTE } from '@components/navigations/routes';

// Import components
import TextCustom from '@components/partials/TextCustom';

// Import styles
import { etape } from '@styles/Themes';

// Import files
import iconFilter from '@styles/images/icon-filter-lg-bleu/icon-filter-lg-bleu.png';
import iconList from '@styles/images/icon-list-bleu/icon-list-bleu.png';

// Import services
import getSelectedFilters from '@services/Map/selectedFilters';

// == Component
const MapButtons = ({ RBSheetRef, currentMarkers, filters }) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={etape.filterBtn}>
        <TouchableOpacity onPress={() => RBSheetRef.current.open()} style={etape.filterText}>
          <Image style={etape.btnImage} source={iconFilter} />
          {getSelectedFilters(filters) > 0 && (
            <View style={etape.filtersNumberContainer}>
              <TextCustom style={etape.filtersNumberText}>
                {getSelectedFilters(filters)}
              </TextCustom>
            </View>
          )}
        </TouchableOpacity>
      </View>
      {currentMarkers.length > 0 && (
        <TouchableOpacity style={etape.listBtn} onPress={() => navigation.navigate(PAGE_LISTE)}>
          <Image style={etape.btnImage} source={iconList} />
        </TouchableOpacity>
      )}
    </>
  );
};

// == Validation
MapButtons.propTypes = {
  RBSheetRef: PropTypes.object.isRequired,
  currentMarkers: PropTypes.array.isRequired,
  filters: PropTypes.object.isRequired,
};

// Export
export default MapButtons;
