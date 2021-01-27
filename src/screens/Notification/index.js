import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Home from '../Home';
import Search from '../Home/Search';
Navigation.registerComponent('home', () => Home);
Navigation.registerComponent('search', () => Search);
const { width, height } = Dimensions.get('window');

export default class Notification extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{ marginTop: 25.5 }}>
            <View style={styles.title}>
              <Text style={styles.titleText}>Thông báo</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: '#e9e9e9',
            borderBottomWidth: 1,
            width: width,
            padding: 0,
          }}
        />
      </ScrollView>
    );
  }
}

Notification.options = {
  topBar: {
    title: {
      text: 'Notification',
      color: 'black',
      alignment: 'center',
      fontWeight: 'bold',
    },
    backButton: {
      visible: true,
    },
    visible: false,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    alignItems: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  spacingAround: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderItem: {},
  orderItemInfo: {
    marginTop: 9,
    marginBottom: 9,
    padding: 15,
  },
});
