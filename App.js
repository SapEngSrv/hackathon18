import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen.js'
import SubmitScreen from './SubmitScreen.js'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Submit: SubmitScreen
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
