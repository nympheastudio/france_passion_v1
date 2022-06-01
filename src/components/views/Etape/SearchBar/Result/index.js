/* eslint-disable no-underscore-dangle */
// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  Keyboard,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// == Import services
import { getLocationLabel } from '@services/SearchBar/Label';

// == Import Style
import { searchBar } from '@styles/Themes';
import color from '@styles/Themes/variables/color';

// Import components
import ResultItem from './ResultItem';


// == Composant
const Result = ({ results, selectResult, setLocation }) => {
  const [showLinearGradient, setShowLinearGradient] = useState(true);
  const [linearGradientOpacity, setLinearGradientOpacity] = useState(1);

//console.log('testresults :');
  //console.log(results.data[0].administrative_area);

 //administrative_area
 // console.log(results);
  const selectLocation = (item,index) => {
    // On récupère les données nécessaire de l'object //_highlightResul
  // console.log('--' + item.data[0].administrative_area);
  //  const labelledLocation = `${getLocationLabel(item).highlight}`;
  
//const labelledLocation = 'test' + item[0].administrative_area + item.name;
const labelledLocation = `${getLocationLabel(item)}`;

    // On set dans le résultat selection dans le state et on vide les results
    selectResult(item.name );
    // On set la location du resultat dans la map
    setLocation(item.latitude, item.longitude);
    // On ferme le clavier
    Keyboard.dismiss();
  };

  const renderResults = () => {
    const resultsList = [];
   // alert('test');
   //console.log('testresults :');
  //console.log(results.data[0].administrative_area);
 
 //administrative_area
 // console.log(results);
   // results.hits.map((result) => {
   results.data.map((result,index) => {

    //console.log('reduce results map -> result :' + JSON.stringify(result));
    let r = Math.round(Math.random() * 10) * index;
    console.log(r);

      resultsList.push(
        <ResultItem result={result} key={r} selectLocation={selectLocation} />,
      );
      return null;
    });
    console.log('test resultsList :');
    console.log(resultsList);
    var uniq = {};
    //const ids = resultsList.map(o => o.id)
    const filtered = resultsList.filter(obj => !uniq[obj.key] && (uniq[obj.key] = true));


    //return resultsList;
    return filtered;
  };

  const toggleLinearGradient = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const currentOffset = layoutMeasurement.height + contentOffset.y;
    if (currentOffset >= contentSize.height - 10) {
      setShowLinearGradient(false);
    } else {
      setShowLinearGradient(true);
    }

    const opacity = (1 - (currentOffset / contentSize.height)) * 20;
    const newLinearGradientOpacity = opacity <= 1 ? opacity : 1;
    if (linearGradientOpacity !== newLinearGradientOpacity) {
      setLinearGradientOpacity(newLinearGradientOpacity);
    }
  };

  return (
    <>
      {results.data && (
        <View style={searchBar.resultsContainer}>
          <ScrollView
            style={searchBar.resultsFlatList}
            contentContainerStyle={{ paddingBottom: 5 }}
            onScroll={({ nativeEvent }) => toggleLinearGradient(nativeEvent)}
            scrollEventThrottle={500}
            keyboardShouldPersistTaps="always"
            showsVerticalScrollIndicator={false}
          >
            {renderResults()}
          </ScrollView>
          {showLinearGradient && (
            <LinearGradient
              colors={['#144C9500', color.primary]}
              start={[0, 0]}
              end={[0, 0.9]}
              style={[searchBar.linearGradient, { opacity: linearGradientOpacity }]}
              pointerEvents="none"
            />
          )}
        </View>
      )}
    </>
  );
};

// == Validation
Result.propTypes = {
  results: PropTypes.object,
  selectResult: PropTypes.func.isRequired,
  setLocation: PropTypes.func.isRequired,
};

Result.defaultProps = {
  results: null,
};


// == Export
export default Result;
