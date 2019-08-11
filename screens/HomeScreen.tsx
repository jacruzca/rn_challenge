/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import { Button, Text } from 'native-base';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import NavigationService from './NavigationService';

const goToScreen = () => { NavigationService.navigate('List')};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../img/cocktail.png')} />
      <Button block={true} style={styles.button} onPress={goToScreen}>
          <Text>Navigate</Text>
      </Button>
    </View>
  );
};

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004563',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    margin: 50,
  },
  button: {
    width: '100%',
    backgroundColor: 'steelblue',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
