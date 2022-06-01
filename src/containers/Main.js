import { connect } from 'react-redux';

// Import Component
import Main from '@components/Main';

// Import actions
import { saveNetworkInfo, saveDeviceInfo } from '@actions/device';
import { validateLocalAuth } from '@actions/auth';
import { changeLanguage } from '@actions/language';

// Data / State
const mapStateToProps = (state) => ({
  isInternetReachable: state.device.isInternetReachable,
  langue: state.language.langue,
});

const mapDispatchToProps = (dispatch) => ({
  saveNetworkInfo: (data) => {
    dispatch(saveNetworkInfo(data));
  },
  saveDeviceInfo: (deviceId, deviceName, expoPushToken) => {
    dispatch(saveDeviceInfo(deviceId, deviceName, expoPushToken));
  },
  validateLocalAuth: () => {
    dispatch(validateLocalAuth());
  },
  changeLanguage: (language) => {
    dispatch(changeLanguage(language));
  },
});

// Connexion
const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

// Export
export default MainContainer;
