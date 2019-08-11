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
import { NavigationContainerComponent } from 'react-navigation';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import NavigationService from './screens/NavigationService';
import Navigator from './screens/Navigator';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Navigator
        ref={(navigatorRef: NavigationContainerComponent) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </Provider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;