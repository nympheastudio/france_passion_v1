// == Import npm
// eslint-disable-next-line camelcase
const jwtDecode = require('jwt-decode');

// Retourne la date d'expiration à partir du token
export const getExpirationDateFromToken = (token) => {
  const decodedToken = jwtDecode(token);
  const expirationDate = decodedToken.exp;
  return expirationDate;
};

export default getExpirationDateFromToken;
