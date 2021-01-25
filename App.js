/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import Intro from './src/screens/Introduce/Intro';

const App = () => {
  return <Intro />;
};

App.options = {
  topBar: {
    title: {
      headerShown: false,
    },
    backButton: {
      visible: false,
    },
    visible: false,
  },
  headerShown: false,
};

const styles = StyleSheet.create({});

export default App;
