import algoliasearch from 'algoliasearch';

export const places = algoliasearch.initPlaces('plQZ5LFDNKB5', 'e662c28a5168bbb3d99cad3a3cec3033');

// Obejct comprennant les options du moteur de recherche Algolia Places
export const queryOptions = {
  hitsPerPage: 20,
  language: ['fr'],
  countries: ['fr'],
  type: ['city', 'address'],
  aroundLatLngViaIP: false,
  // useDeviceLocation: false,
};
