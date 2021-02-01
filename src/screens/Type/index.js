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
import typeBook from './type';
Navigation.registerComponent('home', () => Home);
Navigation.registerComponent('search', () => Search);
const { width, height } = Dimensions.get('window');
import DropDownPicker from 'react-native-dropdown-picker';

export default class Type extends Component {
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
              <Text>Thể loại</Text>
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

        <View style={styles.listBookType}>
          <FlatList
            data={typeBook}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity style={styles.listBookTypeItem}>
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

Type.options = {
  topBar: {
    title: {
      text: 'Type',
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
    paddingRight: 15.75,
    paddingTop: 7.5,
  },
  imageItem: {
    width: 112.5,
    height: 164.25,
  },
  bookImage: {
    width: 140.25,
    height: 203.25,
    marginRight: 13.5,
  },
  bookItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  bookTitle: {
    width: 210,
    color: '#4a4a4a',
    fontWeight: 'bold',
    marginBottom: 2.25,
  },
  listBookType: {},
  listBookTypeItem: {
    marginTop: 9,
    marginBottom: 9,
    padding: 15,
  },
});
