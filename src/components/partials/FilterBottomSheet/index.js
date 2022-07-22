// == Import yarn/npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Keyboard,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

// == Import style
import { filter } from '@styles/Themes';

// == Import icon
import closeIcon from '@styles/images/icon-cross-rose/icon-cross-rose.png';

// == Import Component
import TextCustom from '@components/partials/TextCustom';
import Keyword from './Keyword';
import Categories from './Categories';
import Criteria from './Criteria';
import Languages from './Languages';
import { useNavigation } from '@react-navigation/native';

// Import routes
import { PAGE_LISTE } from '@components/navigations/routes';



// == Component
const FilterBottomSheet = ({
  filters,
  toggleKeywordFilter,
  toggleCategoryFilter,
  toggleCriteriaFilter,
  toggleLanguageFilter,
  resetFilters,
  RBSheetRef,
}) => 


  {
    const navigation = useNavigation();
  
    return (


  <RBSheet
    ref={RBSheetRef}
    closeOnDragDown={false}
    closeOnPressMask
    dragFromTopOnly
    animationType="fade"
    height={filter.RBSheetHeight}
    duration={250}
    customStyles={{
      wrapper: filter.RBSheetWrapper,
      container: filter.RBSheetContainer,
      draggableIcon: filter.RBSheetDraggableIcon,
    }}
  >
    {/* Top Content */}
    <TextCustom fontType="bold" style={filter.mainTitle}>{global.i18n.t('TITRE_FILTRES')}</TextCustom>
    <TouchableOpacity onPress={() => RBSheetRef.current.close()} style={filter.closeBtn}>
      <Image source={closeIcon} />
    </TouchableOpacity>

    {/* Filtres */}
    <ScrollView showsVerticalScrollIndicator={false} style={filter.scrollViewContainer} >

      {/*<Keyword keyword={filters.keyword}  toggleFilter={toggleKeywordFilter} />*/}
      <Categories categories={filters.categories}  toggleFilter={toggleCategoryFilter} />
      <Criteria criteria={filters.criteria} toggleFilter={toggleCriteriaFilter} />

      <Languages languages={filters.languages} toggleFilter={toggleLanguageFilter} />

    </ScrollView>

    {/* Buttons */}
    <View style={filter.bottomBtnWrapper}>
      <TouchableOpacity onPress={resetFilters} style={filter.bottomBtn1}>
        <TextCustom style={filter.bottomBtnText1}>{global.i18n.t('BT_FILTRES_REINITIALISER')}</TextCustom>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
       // navigation.navigate(PAGE_LISTE);
        RBSheetRef.current.close();
        
        Keyboard.dismiss();

       /*setTimeout(() => {
         navigation.navigate(PAGE_LISTE);

       }, 500);*/

        }} style={filter.bottomBtn2}>
        <TextCustom style={filter.bottomBtnText2}>{global.i18n.t('BT_FILTRES_ACTUALISER')}</TextCustom>
      </TouchableOpacity>
    </View>
  </RBSheet>
);

      }

// == Validation
FilterBottomSheet.propTypes = {
  filters: PropTypes.object.isRequired,
  toggleCategoryFilter: PropTypes.func.isRequired,
  toggleKeywordFilter: PropTypes.func.isRequired,
  toggleCriteriaFilter: PropTypes.func.isRequired,
  toggleLanguageFilter: PropTypes.func.isRequired,
  resetFilters: PropTypes.func.isRequired,
  RBSheetRef: PropTypes.object.isRequired,
};

// == Export
export default FilterBottomSheet;
