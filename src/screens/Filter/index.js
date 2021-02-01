import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Home from '../Home';
import Search from '../Home/Search';
Navigation.registerComponent('home', () => Home);
Navigation.registerComponent('search', () => Search);

export default class Filter extends Component {
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
                <Image source={require('../../assets/images/back.png')} />
              </TouchableOpacity>
              <Text>Tháng Tư và tuổi trẻ</Text>
              <TouchableOpacity
                onPress={() =>
                  Navigation.push(this.props.componentId, {
                    component: {
                      name: 'search',
                    },
                  })
                }
              >
                <Image source={require('../../assets/images/search.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity style={[styles.borderButton]}>
            <Text style={{ marginRight: 43.65 }}>Thể loại</Text>
            <Image source={require('../../assets/images/filter.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.borderButton]}>
            <Text style={{ marginRight: 43.65 }}>Sắp xếp</Text>
            <Image source={require('../../assets/images/sort1.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.borderButton, styles.centerDirection]}>
            <Image source={require('../../assets/images/sort.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <View style={{ marginTop: 13.95 }}>
            <View style={styles.bookItem}>
              <TouchableOpacity>
                <Image
                  source={require('../../assets/images/book1.jpg')}
                  style={[styles.bookImage]}
                />
              </TouchableOpacity>
              <View>
                <TouchableOpacity>
                  <Text style={[styles.bookTitle]}>Gởi thời đơn thuần đẹp đẽ của chúng ta</Text>
                </TouchableOpacity>
                <Text style={{ color: '#ababab' }}>Shinkai Makolo</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 7.25,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                    }}
                  >
                    <Image source={require('../../assets/images/star.png')} />
                    <Image source={require('../../assets/images/star.png')} />
                    <Image source={require('../../assets/images/star.png')} />
                    <Image source={require('../../assets/images/star.png')} />
                    <Image source={require('../../assets/images/star.png')} />
                  </View>
                  <Text style={{ color: '#ababab', marginRight: 120 }}> 145</Text>
                </View>

                <Text style={{ color: '#ababab', width: 230, marginTop: 7.25 }}>
                  {' '}
                  The user, a reader in this context, should easily find new content to read,
                  seamlessly get involved in ......
                </Text>

                <View style={[styles.spacingAround, { marginTop: 35.25 }]}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                    }}
                  >
                    <Image source={require('../../assets/images/star.png')} />
                    <Text style={{ color: '#ababab', marginLeft: 4.5 }}> 04 quyển</Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                    }}
                  >
                    <Image source={require('../../assets/images/star.png')} />
                    <Text style={{ color: '#ababab', marginLeft: 4.5 }}> 36.000</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

Filter.options = {
  topBar: {
    title: {
      text: 'Filter',
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
    marginBottom: 7.25,
  },
  borderButton: {
    borderColor: '#e9e9e9',
    borderWidth: 1,
    width: 180,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  centerDirection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
