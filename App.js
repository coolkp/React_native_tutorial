/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
'use strict';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

type Props = {};
const RootStack = createStackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults },
});
const App = createAppContainer(RootStack);
export default App;
