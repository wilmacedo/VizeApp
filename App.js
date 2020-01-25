import React, { useState } from 'react';

import { StyleSheet, View } from 'react-native';
import Color from './styles/color';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Routes from './routes';
import { NavigationNativeContainer } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto': require('./assets/fonts/Roboto.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-light': require('./assets/fonts/Roboto-Light.ttf')
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  return (
    <View style={styles.container}>
        <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    paddingTop: getStatusBarHeight() + 20,
    paddingHorizontal: 20,
  },
});
