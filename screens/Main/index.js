import React from 'react';

import { View, Text, DatePickerIOS } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, Tabs } from '../../components';

import Color from '../../styles/color';

import styles from './styles';
import { rooms } from '../../constants/database';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

function GetTime() {
  if (new Date().getHours() < 18) {
    return "Bom dia, ";
  } else {
    return "Boa noite, ";
  }
}

const Main = () => (
  <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}><GetTime />Wilson</Text>
        <TouchableOpacity>
          <Icon name="ios-menu" size={30} color={Color.darkWhite} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <View style={styles.notificationContainer}>
          <Icon name="ios-flash" size={20} color={Color.warning} />
          <Text style={styles.notificationDescription}>2 Notificações pendentes</Text>
          <Icon style={styles.notificationIcon} name="ios-arrow-round-forward" size={25} color={Color.darkWhite} />
        </View>
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{borderRadius: 15}}>
        {
          rooms.map((data) => {
            return (
              <Card key={data.id} data={data} />
            )
          })
        }
      </ScrollView>
      <Tabs />
    </View>
);

export default Main;