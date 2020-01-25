import { StyleSheet } from 'react-native';

import Color from '../../styles/color';

const styles = StyleSheet.create({
  backgroundImage: {
    marginTop: 25,
    height: 200,
  },

  backgroundImageStyle: {
    borderRadius: 15,
    resizeMode: 'cover',
  },

  container: {
    flex: 1,
    backgroundColor: 'rgba(70, 81, 112, 0.6)',
    borderRadius: 15,
    padding: 15,
  },

  title: {
    color: Color.white,
    fontFamily: 'roboto',
    fontSize: 26,
  },

  info: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    paddingLeft: 20,
  },

  circle: {
    width: 31,
    height: 31,
    backgroundColor: 'rgba(72, 86, 125, 0.6)',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },

  iconRight: {
    paddingLeft: 15,
  },

  iconText: {
    paddingLeft: 8,
    color: Color.white,
  },
  
  iconEnd: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: -7,
  },
});

export default styles;