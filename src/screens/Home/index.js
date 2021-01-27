import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import SeeMore from './SeeMore';
import WellReadBook from './Book/wellReadBook';
import NewBook from './Book/newBook';
Navigation.registerComponent('see-more', () => SeeMore);

export default class Home extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {/* Đọc nhiều */}
          <WellReadBook />
          {/* Ahihi */}
          <NewBook />

          {/* Ahihi */}
          <View style={{ marginTop: 22.5 }}>
            <View style={[styles.spacingAround]}>
              <Text style={{ fontWeight: 'bold' }}>Sách mượn nhiều</Text>
              <TouchableOpacity style={styles.readMoreButton}>
                <Text style={styles.readMoreButtonText}>Xem hết</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.scrollViewHolder}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles.item}>
                  <Image
                    source={require('../../assets/images/book.png')}
                    style={styles.imageItem}
                  />
                  <Text style={{ color: '#4a4a4a' }}>Để con được ốm</Text>
                  <Text style={{ color: '#ababab' }}>Nguyễn Trí Đoàn</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Image source={require('../../assets/images/star.png')} />
                    <Image source={require('../../assets/images/star.png')} />
                    <Image source={require('../../assets/images/star.png')} />
                    <Text style={{ color: '#ababab' }}> 1.278</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                  <Image
                    source={require('../../assets/images/book.png')}
                    style={styles.imageItem}
                  />
                  <Text style={{ color: '#4a4a4a' }}>Để con được ốm</Text>
                  <Text style={{ color: '#ababab' }}>Nguyễn Trí Đoàn</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Image source={require('../../assets/images/star.png')} />
                    <Image source={require('../../assets/images/star.png')} />
                    <Image source={require('../../assets/images/star.png')} />
                    <Text style={{ color: '#ababab' }}> 1.278</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                  <Image
                    source={require('../../assets/images/book.png')}
                    style={styles.imageItem}
                  />
                  <Text style={{ color: '#4a4a4a' }}>Để con được ốm</Text>
                  <Text style={{ color: '#ababab' }}>Nguyễn Trí Đoàn</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Image source={require('../../assets/images/star.png')} />
                    <Image source={require('../../assets/images/star.png')} />
                    <Image source={require('../../assets/images/star.png')} />
                    <Text style={{ color: '#ababab' }}> 1.278</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                  <Image
                    source={require('../../assets/images/book.png')}
                    style={styles.imageItem}
                  />
                  <Text style={{ color: '#4a4a4a' }}>Để con được ốm</Text>
                  <Text style={{ color: '#ababab' }}>Nguyễn Trí Đoàn</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Image source={require('../../assets/images/star.png')} />
                    <Image source={require('../../assets/images/star.png')} />
                    <Image source={require('../../assets/images/star.png')} />
                    <Text style={{ color: '#ababab' }}> 1.278</Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>

          {/* Ahihi */}
          <View style={{ marginTop: 22.5, marginBottom: 23.85 }}>
            <View style={[styles.spacingAround]}>
              <Text style={{ fontWeight: 'bold' }}>Sách được yêu thích</Text>
              <TouchableOpacity style={styles.readMoreButton}>
                <Text style={styles.readMoreButtonText}>Xem hết</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.scrollViewHolder}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles.item}>
                  <Image
                    source={require('../../assets/images/book.png')}
                    style={styles.imageItem}
                  />
                  <Text style={{ color: '#4a4a4a' }}>Để con được ốm</Text>
                  <Text style={{ color: '#ababab' }}>Nguyễn Trí Đoàn</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Image source={require('../../assets/images/star.png')} />
                    <Image source={require('../../assets/images/star.png')} />
                    <Image source={require('../../assets/images/star.png')} />
                    <Text style={{ color: '#ababab' }}> 1.278</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                  <Image
                    source={require('../../assets/images/book.png')}
                    style={styles.imageItem}
                  />
                  <Text style={{ color: '#4a4a4a' }}>Để con được ốm</Text>
                  <Text style={{ color: '#ababab' }}>Nguyễn Trí Đoàn</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Image source={require('../../assets/images/star.png')} />
                    <Image source={require('../../assets/images/star.png')} />
                    <Image source={require('../../assets/images/star.png')} />
                    <Text style={{ color: '#ababab' }}> 1.278</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                  <Image
                    source={require('../../assets/images/book.png')}
                    style={styles.imageItem}
                  />
                  <Text style={{ color: '#4a4a4a' }}>Để con được ốm</Text>
                  <Text style={{ color: '#ababab' }}>Nguyễn Trí Đoàn</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Image source={require('../../assets/images/star.png')} />
                    <Image source={require('../../assets/images/star.png')} />
                    <Image source={require('../../assets/images/star.png')} />
                    <Text style={{ color: '#ababab' }}> 1.278</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                  <Image
                    source={require('../../assets/images/book.png')}
                    style={styles.imageItem}
                  />
                  <Text style={{ color: '#4a4a4a' }}>Để con được ốm</Text>
                  <Text style={{ color: '#ababab' }}>Nguyễn Trí Đoàn</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Image source={require('../../assets/images/star.png')} />
                    <Image source={require('../../assets/images/star.png')} />
                    <Image source={require('../../assets/images/star.png')} />
                    <Text style={{ color: '#ababab' }}> 1.278</Text>
                  </View>
                </TouchableOpacity>
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
