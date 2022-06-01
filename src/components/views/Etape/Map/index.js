// Import node modules
import React, {
  useRef,
  useEffect,
  useCallback,
  useState,
} from 'react';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { View, Dimensions, Keyboard } from 'react-native';
import ClusteredMapView from 'react-native-maps-super-cluster';

import * as ScreenOrientation from 'expo-screen-orientation';

// Import styles
import { etape } from '@styles/Themes';

// Import service
import filterMarkers from '@services/Map/filterMarkers';

// Import components
import UserMarker from '@containers/views/Etape/Map/UserMarker';
import HostMarker from '@containers/views/Etape/Map/HostMarker';
import Cluster from '@components/views/Etape/Map/Cluster';
import MapButtons from '@components/views/Etape/Map/MapButtons';
import Callout from '@components/views/Etape/Map/Callout';
import FilterBottomSheet from '@containers/partials/FilterBottomSheet';
import Scale from './Scale';


const Map = ({
  hosts,
  currentMarkers,
  saveCurrentMarkers,
  location,
  resetLocation,
  resetSearchBar,
  region,
  setRegion,
  filters,
  markerSelected,
  setMarkerSelected,
}) => {
	
	
	
	
	
	//if(markerSelected)console.log(markerSelected.id);
	
	
  // Définitions du hook de focus (retourne true si page active)
  const isFocused = useIsFocused();
  // Définition des state
  const [mapLayout, setMapLayout] = useState(null);
  const [calloutLayout, setCalloutLayout] = useState(null);
  const [mapPoints, setMapPoints] = useState(null);
  const [screenSize, reloadLayout] = useState({});

  // Définition des référence
  const mapRef = useRef(null);
  const RBSheetRef = useRef(null);
  let isMount = true;
  
  

  


  // Fonction permettant le centrer la map sur un marker
  const moveToMarker = () => {
    if (!mapRef.current) {
      return;
    }

    const map = mapRef.current.getMapRef().current;
    const markerCoordinate = {
      latitude: markerSelected.latitude,
      longitude: markerSelected.longitude,
    };
    /**
     * Calcule la position y (vertical) pour déplacer la carte de façon à ce que le marqueur
     * sélectionné soit juste en dessous de la popup(callout)
     *
     * le calcul :
     * centre - 30 - différence entre (hauteur callout + marginTop) et (hauteur map / 2)
     *
     * précision :
     * centre = point.y = la position vertical actuel du marker sélectionné
     * 30 = hauteur du marker + 10 de marge
     */
    const calculYPosition = (y) => (
      // y + 90 - ((calloutLayout.height + calloutLayout.y) - (mapLayout.height / 2))
      y - 30 - ((calloutLayout.height + calloutLayout.y) - (mapLayout.height / 2))
    );

    map.pointForCoordinate(markerCoordinate)
      .then((point) => map.coordinateForPoint({ x: point.x, y: calculYPosition(point.y) }))
      // .then((newCoords) => map.animateCamera({ center: { ...newCoords } }, { duration: 300 }))
      .then((newCoords) => map.setCamera({ center: { ...newCoords } }))
      .catch((error) => console.log(error));
  };

  const goToRegion = (NewLocation) => {
    const newRegion = {
      ...NewLocation,
      latitudeDelta: 0.03,
      longitudeDelta: 0.03,
    };
    mapRef.current.getMapRef().current.animateToRegion(newRegion);
  };

  const filterHostMarkers = async () => {
    try {
      const mapBoundaries = await mapRef.current.getMapRef().current.getMapBoundaries();
      if (isMount) {
        const filteredMarkers = filterMarkers(hosts, mapBoundaries, filters);
        setMapPoints(mapBoundaries);
        saveCurrentMarkers(filteredMarkers);
		
		

      }
    } catch (error) {
      //console.log(error);
    }
  };

  const handleMapPress = () => {
    Keyboard.dismiss();
    resetSearchBar();
    if (markerSelected && isFocused) {
      setMarkerSelected(null);
    }
  };

  const handlePanDrag = () => {
    if (markerSelected && isFocused) {
      setMarkerSelected(null);
    }
  };

  const renderCluster = (cluster, onPress) => {
    if (!mapRef.current) {
      return (null);
    }

    const { pointCount, coordinate, clusterId } = cluster;
    const clusteringEngine = mapRef.current.getClusteringEngine();
    clusteringEngine.getLeaves(clusterId, 100);
    return <Cluster coordinate={coordinate} onPress={onPress} pointCount={pointCount} />;
  };

  useEffect(() => {
    // Handler to call on window resize
    function handleRotate() {
      const { 
        width: deviceWidth, 
        height: deviceHeight 
      } = Dimensions.get('window')

      // Set window width/height to state
      reloadLayout({
        width: deviceWidth,
        height: deviceHeight
      })
    }

    const orientationEventSubscription = ScreenOrientation.addOrientationChangeListener(handleRotate);

    handleRotate();

    return () => ScreenOrientation.removeOrientationChangeListener(orientationEventSubscription);
  }, []);

  useEffect(() => {
    if (!isMount) {
      isMount = true;
    }
    return () => {
      isMount = false;
    };
  }, []);

  useEffect(() => {
    if (location.latitude && location.longitude) {
      goToRegion(location);
      resetLocation();
    }
	

  }, [location]);

  useFocusEffect(useCallback(() => {
    if ((!markerSelected && calloutLayout) ) {
      setCalloutLayout(null);
    }
  }, [markerSelected]));

  useFocusEffect(useCallback(() => {
    if (calloutLayout && markerSelected) {
      moveToMarker();
    }
  }, [calloutLayout]));

  useFocusEffect(useCallback(() => {
    if (hosts.length > 0) {
      filterHostMarkers();
    }
	      		if(window["keyword_match"] === 1){
				console.log('test');
			 filterHostMarkers();
			}
  }, [hosts, region, filters]));
  
  
  
  

			
			

  return (
    <View
      style={etape.mapContainer}
      onLayout={(event) => setMapLayout(event.nativeEvent.layout)}
    >
      <ClusteredMapView
        // style={{ height: (Dimensions.get('screen').height - 80 - 135) }}
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 46.810173,
          longitude: 2.629111,
          latitudeDelta: 15,
          longitudeDelta: 15,
        }}
        width={screenSize.width}
        height={screenSize.height}
        radius={Dimensions.get('window').width / 100 * 20}
        maxZoom={6}
        ref={mapRef}
        accessor={(marker) => [marker.longitude, marker.latitude]}
        data={currentMarkers}
        renderMarker={(marker) => <HostMarker key={marker.id} marker={marker} />}
        renderCluster={renderCluster}
        onRegionChangeComplete={(reg) => setRegion(reg)}
        onPress={handleMapPress}
        onPanDrag={handlePanDrag}
        moveOnMarkerPress={false}
        showsCompass={false}
        showsScale={false}
        showsBuildings={false}
        showsTraffic={false}
        showsIndoors={false}
        showsIndoorLevelPicker={false}
        zoomControlEnabled={false}
        rotateEnabled={false}
        pitchEnabled={false}
        toolbarEnabled={false}
        showsPointsOfInterest
      >
        <UserMarker />
      </ClusteredMapView>

      {isFocused && markerSelected && (
        <Callout markerSelected={markerSelected} setCalloutLayout={setCalloutLayout} />
      )}
      <MapButtons RBSheetRef={RBSheetRef} currentMarkers={currentMarkers} filters={filters} />
      <FilterBottomSheet RBSheetRef={RBSheetRef} />
      {mapPoints && (
        <Scale mapPoints={mapPoints} />
      )}
    </View>
  );
};

// Validation
Map.propTypes = {
  hosts: PropTypes.array.isRequired,
  currentMarkers: PropTypes.array.isRequired,
  saveCurrentMarkers: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  resetLocation: PropTypes.func.isRequired,
  resetSearchBar: PropTypes.func.isRequired,
  region: PropTypes.object.isRequired,
  setRegion: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  markerSelected: PropTypes.object,
  setMarkerSelected: PropTypes.func.isRequired,
};

Map.defaultProps = {
  markerSelected: null,
};

// Export
export default Map;
