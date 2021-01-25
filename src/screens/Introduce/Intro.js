import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Swiper from 'react-native-swiper';
import Intro1 from './intro1';
import Intro2 from './intro2';
import Intro3 from './intro3';

export default class Intro extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper}>
        <Intro1 />

        <Intro2 />

        <Intro3 />
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});
