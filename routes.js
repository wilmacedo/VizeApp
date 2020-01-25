import React from 'react';

import { createStackNavigation } from 'react-navigation';

import { Main, Room } from './screens';

const Routes = createStackNavigation({
  Home: Main,
  Room: Room
});

export default Routes;
