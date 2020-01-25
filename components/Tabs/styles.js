import { StyleSheet } from 'react-native';

import { ifIphoneX } from 'react-native-iphone-x-helper';

import Color from '../../styles/color';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    ...ifIphoneX({
      height: 80,
    }, {
      height: 50,
    }),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default styles;