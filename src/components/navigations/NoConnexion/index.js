// == Import npm
import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import PropTypes from 'prop-types';

// == Import components
import TextCustom from '@components/partials/TextCustom';
import Loader from '@components/partials/Loader';

// == Import style
import { safeAreaViewTop } from '@styles/Themes/interfaces/safeAreaView';

// == Composant
const NoConnexion = ({ isConnected }) => (
  <>
    <SafeAreaView style={safeAreaViewTop}>
      <StatusBar backgroundColor={safeAreaViewTop.backgroundColor} barStyle="light-content" />
      {isConnected === null && <Loader />}
      <View style={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        // justifyContent: 'center',
      }}
      >
        <View style={{
          width: '100%',
          height: '50%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          <TextCustom style={{ width: '70%', color: 'white', textAlign: 'center' }}>
            Merci de vous connecter à Internet afin de profiter des merveilles de cette application!
          </TextCustom>
        </View>
      </View>
    </SafeAreaView>
  </>
);

// == Validation
NoConnexion.propTypes = {
  isConnected: PropTypes.bool,
};

NoConnexion.defaultProps = {
  isConnected: null,
};

// == Export
export default NoConnexion;
