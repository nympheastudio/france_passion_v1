import { connect } from 'react-redux';

// Import Component
import Map from '@components/views/Etape/Map';

// Import actions
import {
  saveCurrentMarkers,
  resetLocation,
  setRegion,
  setMarkerSelected,
} from '@actions/map';
import { resetSearchBar } from '@actions/search';

// Data / State
const mapStateToProps = (state) => ({
  hosts: state.host.hosts,
  currentMarkers: state.map.currentMarkers,
  location: state.map.location,
  region: state.map.region,
  filters: state.filters,
  markerSelected: state.map.markerSelected,
});

const mapDispatchToProps = (dispatch) => ({
  saveCurrentMarkers: (markers) => {
    dispatch(saveCurrentMarkers(markers));
  },
  resetLocation: () => {
    dispatch(resetLocation());
  },
  resetSearchBar: () => {
    dispatch(resetSearchBar());
  },
  setRegion: (region) => {
    dispatch(setRegion(region));
  },
  setMarkerSelected: (marker) => {
    dispatch(setMarkerSelected(marker));
  },
});

// Map
const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);

// Export
export default MapContainer;
