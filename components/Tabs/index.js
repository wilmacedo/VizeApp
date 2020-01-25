import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { View } from 'react-native';

import Color from '../../styles/color';
import styles from './styles';

const Tabs = () => (
  <View style={styles.container}>
    <Icon style={styles.icon} name="ios-apps" size={25} color={Color.white} />
    <Icon style={styles.icon} name="ios-add" size={25} color={Color.darkest} />
    <Icon style={styles.icon} name="ios-send" size={25} color={Color.darkest} />
  </View>
);

export default Tabs;