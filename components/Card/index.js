import React from 'react';

import { ImageBackground, View, Text } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import Color from '../../styles/color';
import styles from './styles';

const Card = ({ data }) => (
  <TouchableWithoutFeedback key={data.id}>
      <ImageBackground
        source={data.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
        style={styles.backgroundImage}>

        <View style={styles.container}>
          <Text style={styles.title}>{data.name}</Text>
          <View style={styles.info}>
            <TouchableOpacity style={styles.circle}>
              <Icon name="ios-sunny" size={25} color={Color.white} style={{ paddingTop: 3 }} />
            </TouchableOpacity>
            <View style={styles.iconRight}>
              <TouchableOpacity style={styles.circle}>
                <Icon name="ios-videocam" size={25} color={Color.white} style={{ paddingTop: 3 }} />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }} />
            <View style={styles.iconEnd}>
              <Icon name="ios-thermometer" size={25} color={Color.white} />
              <Text style={styles.iconText}>21 °</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
);

export default Card;