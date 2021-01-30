import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Home from '../../Home/index';
Navigation.registerComponent('home', () => Home);
import recentSearch from './recentSearch';
import Icon from 'react-native-vector-icons/thebook-appicon';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationUtils } from '../../../navigations';

export default class Search extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => NavigationUtils.startMainContent()}
          >
            <Icon name={'ic-delete'} size={18} />
          </TouchableOpacity>

          {/* <SearchBar ref="searchBar" placeholder="Hãy nhập tên sách mà bạn muốn tìm!" /> */}
          <View
            style={{
              paddingHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <TextInput
              style={{
                fontSize: 18,
                color: 'black',
                borderBottomColor: '#e9e9e9',
              }}
              placeholder={'Hãy nhập tên sách mà bạn muốn tìm!'}
            />
            <TouchableOpacity>
              <Icon name={'ic-search'} size={18} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: '#e9e9e9',
              borderBottomWidth: 1,
              padding: 0,
            }}
          />

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
  item: {
    color: 'black',
    fontSize: 18,
    paddingRight: 18.75,
    paddingTop: 7.5,
  },
  searchBar: {
    marginTop: 17.85,
  },
  listRecentSearch: {
    marginBottom: 7.5,
  },
});
