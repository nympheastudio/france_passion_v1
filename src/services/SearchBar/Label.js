// Fonction retournant le label de localisation pour la fiche acceuillant
// en définissant les textes mis en avant en fonction des données renseignées
export const getLocationLabel = (item) => {
  // On initialise la constante à retourner

  //console.log(item);
  //alert('test');
  const locationLabel = {
    highlight: '',
    lowlight: '',
  };


  if (item.locality) {
  locationLabel.highlight += `${item.locality}`;
  }
  if (item.postal_code) {
    locationLabel.lowlight += `${item.postal_code}, `;
  }
  if (item.administrative_area) {
    //locationLabel.lowlight += `${item.administrative_area} `;
  }

  if (item.region) {
    locationLabel.lowlight +=  `${item.region} `;
  }

  if (item.country_code) {
    locationLabel.lowlight += ` ${item.country_code} `;
  }

  // On update cette constante en fonction de l'existance des champs
  /*
  if (item.locale_names) {
    locationLabel.highlight += `${item.locale_names[0]}`;
  }
  if (item.postcode) {
    locationLabel.lowlight += `${item.postcode[0]}, `;
  }
  if (item.city) {
    locationLabel.lowlight += `${item.city[0]}, `;
  }
  if (item.administrative) {
    locationLabel.lowlight += `${item.administrative}`;
  }*/
  // if (item.city) {
  //   locationLabel.highlight += ` ${item.city[0]} `;
  // } else if (item.locale_names) {
  //   locationLabel.highlight += `${item.locale_names[0]} `;
  // }
  // if (item.postcode) {
  //   locationLabel.highlight += `(${item.postcode[0]}) `;
  // }
  // if (item.city && item.locale_names) {
  //   locationLabel.lowlight += `${item.locale_names[0]}, `;
  // }
  // if (item.administrative) {
  //   locationLabel.lowlight += `${item.administrative[0]}`;
  // }
  return locationLabel;
};

export default getLocationLabel;
