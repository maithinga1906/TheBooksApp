import React, { Component } from 'react';
import { Dimensions, FlatList } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Home from '../../Home/index';
const screenWidth = Dimensions.get('screen').width - 40;
Navigation.registerComponent('home', () => Home);
import SearchBar from 'react-native-search-bar';
import recentSearch from './recentSearch';

export default class Search extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() =>
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'home',
                },
              })
            }
          >
            <Image source={require('../../../assets/images/close.png')} />
          </TouchableOpacity>

          <SearchBar ref="searchBar" placeholder="Hãy nhập tên sách mà bạn muốn tìm!" />

          <View style={{ marginBottom: 10.5 }}>
            <Text style={{ marginTop: 10.8, color: '#ababab' }}>Các từ khoá thông dụng</Text>
          </View>

          <View>
            <FlatList
              data={recentSearch}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.listRecentSearch}>
                  <Text style={{ color: '#4a4a4a' }}>{item.name}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

Search.options = {
  topBar: {
    title: {
      text: 'Search',
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
    padding: 21,
  },
  closeButton: {
    marginTop: 25.65,
    marginBottom: 17.85,
  },
  spacingAround: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  readMoreButtonText: {
    color: '#1d9dd8',
  },
  scrollViewHolder: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    color: 'black',
    fontSize: 18,
    paddingRight: 18.75,
    paddingTop: 7.5,
  },
  imageItem: {
    width: screenWidth / 2 - 25,
    height: 250,
  },
  filterTitle: {
    marginTop: 12.75,
    marginBottom: 7.5,
  },
  searchBar: {
    marginTop: 17.85,
  },
  listRecentSearch: {
    marginBottom: 7.5,
  },
});
