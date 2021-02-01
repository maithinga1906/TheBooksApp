import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Home from '../Home';
import Search from '../Home/Search';
import sortByVariable from './sortByVariable';
Navigation.registerComponent('home', () => Home);
Navigation.registerComponent('search', () => Search);
const { width, height } = Dimensions.get('window');

export default class Sort extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{ marginTop: 25.5 }}>
            <View style={styles.spacingAround}>
              <TouchableOpacity
                onPress={() =>
                  Navigation.push(this.props.componentId, {
                    component: {
                      name: 'home',
                    },
                  })
                }
              >
                <Image source={require('../../assets/images/close.png')} />
              </TouchableOpacity>
              <Text>Sắp xếp</Text>
              <TouchableOpacity
                onPress={() =>
                  Navigation.push(this.props.componentId, {
                    component: {
                      name: 'search',
                    },
                  })
                }
              >
                <Image source={require('../../assets/images/refresh.png')} />
              </TouchableOpacity>
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

        <View style={styles.listSortBy}>
          <FlatList
            data={sortByVariable}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity style={styles.listSortByItem}>
                  <Text style={{ color: '#4a4a4a' }}>{item.name}</Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderBottomColor: '#e9e9e9',
                    borderBottomWidth: 1,
                    width: width,
                    padding: 0,
                  }}
                />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    );
  }
}

Sort.options = {
  topBar: {
    title: {
      text: 'Sắp xếp',
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
  spacingAround: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listSortBy: {},
  listSortByItem: {
    marginTop: 9,
    marginBottom: 9,
    padding: 15,
  },
});
