/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import SearchScreen from './screens/SearchScreen';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <SearchScreen/>
    </Provider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;