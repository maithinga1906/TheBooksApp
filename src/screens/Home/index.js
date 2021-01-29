/* eslint-disable no-alert */
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import SeeMore from './SeeMore';
import WellReadBook from './Book/wellReadBook';
import NewBook from './Book/newBook';
import Icon from 'react-native-vector-icons/thebook-appicon';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import books from './Book/bookData';
import Detail from '../Detail';

Navigation.registerComponent('see-more', () => SeeMore);
Navigation.registerComponent('detail', () => Detail);

export default class Home extends Component {
  rateCount(data) {
    const fields = [];
    for (let i = 0; i < data; i++) {
      fields.push(<Icon name="star" color={Colors.yellow} size={15} />);
    }
    var a = 5 - data;
    for (let j = 0; j < a; j++) {
      fields.push(<Icon name="ic-star-pre" color={Colors.yellow} size={15} />);
    }
    return fields;
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {/* Đọc nhiều */}
          <WellReadBook />
          {/* Sách mới */}
          <NewBook />

          {/* Sách mượn nhiều */}
          <View style={{ marginTop: 22.5 }}>
            <View style={[styles.spacingAround]}>
              <Text style={{ fontWeight: 'bold' }}>Sách mượn nhiều</Text>
              <TouchableOpacity style={styles.readMoreButton}>
                <Text style={styles.readMoreButtonText}>Xem hết</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.scrollViewHolder}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {books.map((item, index) => (
                  <View>
                    {item.category == 'Sách mượn nhiều' ? (
                      <TouchableOpacity
                        style={styles.item}
                        onPress={() =>
                          Navigation.push(this.props.componentId, {
                            component: {
                              name: 'detail',
                              passProps: {
                                data: item,
                              },
                            },
                          })
                        }
                      >
                        <Image source={item.image} style={styles.imageItem} />
                        <Text numberOfLines={1} style={{ color: '#4a4a4a' }}>
                          {item.nameBook.length < 14
                            ? `${item.nameBook}`
                            : `${item.nameBook.substring(0, 14)}...`}
                        </Text>
                        <Text style={{ color: '#ababab' }}>{item.author}</Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          {this.rateCount(`${item.rate}`)}
                          <Text style={{ color: '#ababab' }}> 1.278</Text>
                        </View>
                      </TouchableOpacity>
                    ) : null}
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>

          {/* Sách được yêu thích */}
          <View style={{ marginTop: 22.5, marginBottom: 23.85 }}>
            <View style={[styles.spacingAround]}>
              <Text style={{ fontWeight: 'bold' }}>Sách được yêu thích</Text>
              <TouchableOpacity style={styles.readMoreButton}>
                <Text style={styles.readMoreButtonText}>Xem hết</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.scrollViewHolder}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {books.map((item, index) => (
                  <View>
                    {item.category == 'Sách được yêu thích' ? (
                      <TouchableOpacity
                        style={styles.item}
                        onPress={() =>
                          Navigation.push(this.props.componentId, {
                            component: {
                              name: 'detail',
                              passProps: {
                                data: item,
                              },
                            },
                          })
                        }
                      >
                        <Image source={item.image} style={styles.imageItem} />
                        <Text numberOfLines={1} style={{ color: '#4a4a4a' }}>
                          {item.nameBook.length < 14
                            ? `${item.nameBook}`
                            : `${item.nameBook.substring(0, 14)}...`}
                        </Text>
                        <Text style={{ color: '#ababab' }}>{item.author}</Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          {this.rateCount(`${item.rate}`)}
                          <Text style={{ color: '#ababab' }}> 1.278</Text>
                        </View>
                      </TouchableOpacity>
                    ) : null}
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
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
});
