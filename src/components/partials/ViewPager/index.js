/* eslint-disable react/no-array-index-key */
// == Import npm
import React from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';

// Import components
import TextCustom from '@components/partials/TextCustom';

// Import Styles
import { texte } from '@styles/Themes/interfaces/articles';
import { preHome } from '@styles/Themes/preHome';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Import services
import { openOrderGuideLink } from '@services/Language/externalLinks';

// == Import
const texts = [
  { content: () => global.i18n.t('TEXTE_PAGE_ACCUEIL_1') },
  { content: () => global.i18n.t('TEXTE_PAGE_ACCUEIL_2') },
  { content: () => global.i18n.t('TEXTE_PAGE_ACCUEIL_3') },
];
const { width } = Dimensions.get('window');

// == Composant
const ViewPager = () => {
  const scrollX = new Animated.Value(0); // this will be the scroll location of our ScrollView
  const position = Animated.divide(scrollX, width);

  const handleLinkPress = () => {
    openOrderGuideLink();
  };

  return (
    <View style={preHome.viewPagerContainer}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {texts.map((text, i) => (
          <View key={i} style={{ width, ...preHome.viewPagerTextContainer }}>
            <ScrollView>
              <TextCustom style={{ ...preHome.viewPagerText, ...texte }}>
                {text.content()}
              </TextCustom>
              {i === 2 && (
                <TouchableOpacity onPress={handleLinkPress} style={{ marginVertical: 5 }}>
                  <TextCustom style={{ ...preHome.viewPagerText, ...texte, color: '#0089CF' }}>
                    {global.i18n.t('BT_LIEN_ADHESION_COMMANDE_GUIDE')}
                  </TextCustom>
                </TouchableOpacity>
              )}
            </ScrollView>
          </View>
        ))}
      </ScrollView>

      <View style={{ flexDirection: 'row' }}>
        {texts.map((_, i) => {
          const opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View key={i} style={{ opacity, ...preHome.viewPagerDotIndicator }} />
          );
        })}
      </View>
    </View>
  );
};

// == Export
export default ViewPager;
