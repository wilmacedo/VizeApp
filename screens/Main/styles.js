import { StyleSheet } from 'react-native';

import Color from '../../styles/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  },

  // Header
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: Color.white,
    fontFamily: 'roboto-light',
    fontSize: 26,
  },

  // Notifications
  notificationContainer: {
    marginTop: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 30, 
    borderColor: Color.semiDark,
  },

  notificationDescription: {
    color: Color.darkWhite,
    paddingLeft: 10,
    flex: 1,
  },

  // Rooms
  cardImage: {
    marginTop: 25,
    height: 200,
  },

  cardImageStyle: {
    borderRadius: 15,
    resizeMode: 'cover',
  },

  cardContainer: {
    flex: 1,
    backgroundColor: 'rgba(70, 81, 112, 0.6)',
    borderRadius: 15,
    padding: 15,
  },

  cardTitle: {
    color: Color.white,
    fontFamily: 'roboto',
    fontSize: 26,
  },

  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    paddingLeft: 20,
  },

  cardIconRight: {
    paddingLeft: 15,
  },

  cardIconText: {
    paddingLeft: 8,
    color: Color.white,
  },
  
  cardIconEnd: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: -7,
  },

  cardCircle: {
    width: 31,
    height: 31,
    backgroundColor: 'rgba(72, 86, 125, 0.6)',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default styles;