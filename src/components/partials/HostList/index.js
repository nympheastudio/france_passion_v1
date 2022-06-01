// == Import npm
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

// == Import Styles
import { liste } from '@styles/Themes';

// == Import Component
import HostCard from '@containers/partials/HostCard';
import Loader from '@components/partials/Loader';

// == Composant
const HostList = ({
  markers,
  HeaderComponent,
  EmptyComponent,
  stickyHeader,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      setIsLoading(false);
      return () => setIsLoading(true);
    }, []),
  );

  return (
    <View style={liste.mainContainer}>
      <FlatList
        style={liste.cardListContainer}
        initialNumToRender={5}
        data={markers}
        renderItem={({ item }) => <HostCard basicCard marker={item} />}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={() => <HeaderComponent />}
        ListEmptyComponent={() => (!isLoading && <EmptyComponent />)}
        stickyHeaderIndices={stickyHeader ? [0] : null}
      />
      {isLoading && <Loader />}
    </View>
  );
};

// == Validation
HostList.propTypes = {
  markers: PropTypes.array.isRequired,
  HeaderComponent: PropTypes.elementType.isRequired,
  EmptyComponent: PropTypes.elementType.isRequired,
  stickyHeader: PropTypes.bool,
};

HostList.defaultProps = {
  stickyHeader: false,
};


// == Export
export default React.memo(HostList);
