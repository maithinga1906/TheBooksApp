import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { RNNDrawer } from 'react-native-navigation-drawer-extension';

const windowWidth = Dimensions.get('window').width;

export default class Home extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>Home</Text>
        </View>
      </ScrollView>
    );
  }
}

Home.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'black',
      alignment: 'center',
      fontWeight: 'bold',
    },
    backButton: {
      visible: true,
    },
    leftButtons: {
      id: 'sideMenu',
      icon: require('../../assets/images/sort.png'),
    },
    rightButtons: {
      id: 'search',
      icon: require('../../assets/images/search.png'),
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
