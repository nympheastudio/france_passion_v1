import React, { useState } from 'react';
import { isPointInPolygon } from 'geolib';

import {
  saveCurrentMarkers,
  resetLocation,
  setRegion,
  setMarkerSelected,
} from '@actions/map';
// Fonction retournant un booléen en fonction de s'il se situe dans le polygone
// On passe en argument, un marker ainsi qu'une coordonnée nord est et sud ouest
const MarkersIsInPolygon = (marker, northEast, southWest) => {
  // On défini les coordonnées du marker en format LatLng
  const markerLocation = {
    latitude: parseFloat(marker.latitude),
    longitude: parseFloat(marker.longitude),
  };
  // On retourne true ou false si le marker se situe dans le polygone
  // formé par la combinaison de northEast et southWest
  return isPointInPolygon(markerLocation, [
    { latitude: northEast.latitude, longitude: northEast.longitude },
    { latitude: northEast.latitude, longitude: southWest.longitude },
    { latitude: southWest.latitude, longitude: southWest.longitude },
    { latitude: southWest.latitude, longitude: northEast.longitude },
  ]);
};

// Fonction retournant un tableau de markers présent dans un certain périmètre
const filterByDistance = (markers, mapBoundaries) => {
  // On définie ce périmètre
  const { northEast, southWest } = mapBoundaries;

  
  
  // On filtre les markers
  const markersFiltered = markers.filter((marker) => (
    MarkersIsInPolygon(marker, northEast, southWest)
  ));
  
  
  

  return markersFiltered;
};

// Fonction retournant un tableau de markers correspondant aux catégories selectionnées
// Si rien n'est selectioné, on retourne tous les markers
// Sont retournés les markers correspondants à au moins une catégorie
const filterByCategory = (markers, categories) => {
  if (categories.find((category) => category.checked === true)) {
    const filteredMarkers = markers.filter((marker) => {
      if (categories.find((category) => category.name === 'BT_FILTRES_FERMIER' && category.checked) && marker.fermier) {
        return true;
      }
      if (categories.find((category) => category.name === 'BT_FILTRES_VIGNERON' && category.checked) && marker.vigneron) {
        return true;
      }
      if (categories.find((category) => category.name === 'BT_FILTRES_AUTRE_ACTIVITE' && category.checked) && marker.autres) {
        return true;
      }
	  
	  
      return false;
    });
    return filteredMarkers;
  }
  return markers;
};

// Fonction retournant un tableau de markers correspondant aux critères selectionnés
// Si rien n'est selectioné, on retourne tous les markers
// Sont retournés les markers correspondants à au moins un critère
const filterByCriteria = (markers, criteria) => {
  if (criteria.find((critere) => critere.checked === true)) {
    const filteredMarkers = markers.filter((marker) => {
      if (criteria.find((critere) => critere.name === 'BT_FILTRES_REPAS_SUR_PLACE' && critere.checked) && marker.repas_sur_place) {
        return true;
      }
      if (criteria.find((critere) => critere.name === 'BT_FILTRES_BIO' && critere.checked) && marker.bio) {
        return true;
      }
      if (criteria.find((critere) => critere.name === 'BT_FILTRES_LABEL_HANDICAP' && critere.checked) && marker.handicap) {
        return true;
      }
      if (criteria.find((critere) => critere.name === 'BT_FILTRES_GRANDS_CC' && critere.checked) && marker.grand_camping_car) {
        return true;
      }
      if (criteria.find((critere) => critere.name === 'BT_FILTRES_ACTIVITES_SUR_PLACE' && critere.checked) && marker.activites_sur_place) {
        return true;
      }
	  
	  
	  	  // console.log(marker.nom);
	// if (criteria.find((critere) => critere.name === 'BT_FILTRES_REPAS_SUR_PLACE' && critere.checked) ) {  	

        // if (marker.nom === 'Olivier Bouzige') return true;
      // }
		// return false;
		  
	  
	  
	  
      return false;
    });
	
	
	
    return filteredMarkers;
  }
  return markers;
};

// Fonction retournant un tableau de markers correspondant aux langues selectionnées
// Si rien n'est selectioné, on retourne tous les markers
// Sont retournés les markers correspondants à au moins une langue
const filterByLangue = (markers, languages) => {
  if (languages.find((language) => language.checked === true)) {
    const filteredMarkers = markers.filter((marker) => {
      if (languages.find((language) => language.name === 'en' && language.checked) && marker.langues.includes('en')) {
        return true;
      }
      if (languages.find((language) => language.name === 'it' && language.checked) && marker.langues.includes('it')) {
        return true;
      }
      if (languages.find((language) => language.name === 'de' && language.checked) && marker.langues.includes('de')) {
        return true;
      }
      if (languages.find((language) => language.name === 'es' && language.checked) && marker.langues.includes('es')) {
        return true;
      }
      if (languages.find((language) => language.name === 'nl' && language.checked) && marker.langues.includes('nl')) {
        return true;
      }
      return false;
    });
    return filteredMarkers;
  }
  return markers;
};



const filterByKeyword = (markers,keyword) => {
		

	let objIndex = keyword.findIndex((obj => obj.name == 'BT_FILTRES_KEYWORD'));

	let keyword_current = keyword[objIndex].value.toLowerCase();
	
	//console.log( 'checked : ' + keyword[objIndex].checked );

	if (keyword[objIndex].checked === true && keyword[objIndex].value.length > 3) {	
		//console.log('keyword:'+' '+keyword_current + ' lg :'+keyword[objIndex].value.length);
	
		const filteredMarkers = markers.filter((marker ) => { 
			
			
			//if(JSON.stringify(marker.nom_propriete).includes(keyword_current))console.log(JSON.stringify(marker));

			if(JSON.stringify(marker.nom_propriete).toLowerCase().includes(keyword_current)) return true;
			if(JSON.stringify(marker.nom            ).toLowerCase().includes(keyword_current)) return true;
			if(JSON.stringify(marker.aire_accueil   ).toLowerCase().includes(keyword_current)) return true;
			if(JSON.stringify(marker.indication_fr  ).toLowerCase().includes(keyword_current)) return true;
			if(JSON.stringify(marker.ville          ).toLowerCase().includes(keyword_current)) return true;
			if(JSON.stringify(marker.produits_fiche).toLowerCase().includes(keyword_current)) return true;
			if(JSON.stringify(marker.produits_apercu).toLowerCase().includes(keyword_current)) return true;

			return false;
		 });
		
		 return filteredMarkers;
	}
	  
	 return markers;
};

// Fonction retournant un tableau de markers filtrés par différents filtres
const filterMarkers = (markers, mapBoundaries, filters) => {
  
  const markersFilteredByKeyword = filterByKeyword(markers, filters.keyword);
  const markersFilteredByDistance = filterByDistance(markersFilteredByKeyword, mapBoundaries);

  const markersFilteredByCategory = filterByCategory(markersFilteredByDistance, filters.categories);
  const markersFilteredByCriteria = filterByCriteria(markersFilteredByCategory, filters.criteria);
  

  const markersFilteredByLangue = filterByLangue(markersFilteredByCriteria, filters.languages);
  

  
  
  return markersFilteredByLangue;
  //return markersFilteredByKeyword;
};

export default filterMarkers;
