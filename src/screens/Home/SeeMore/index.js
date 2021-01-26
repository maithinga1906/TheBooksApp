import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Home from '../index';
const screenWidth = Dimensions.get('screen').width - 40;
Navigation.registerComponent('home', () => Home);

export default class SeeMore extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() =>
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'home',
                },
              })
            }
          >
            <Image source={require('../../../assets/images/back.png')} />
          </TouchableOpacity>
          <View style={{ padding: 18.75 }}>
            <View style={[styles.filterTitle]}>
              <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Đọc nhiều</Text>
            </View>
            <View style={styles.scrollViewHolder}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
              >
                <TouchableOpacity style={styles.item}>
                  <Image
                    source={require('../../../assets/images/book.png')}
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
                    <Image source={require('../../../assets/images/star.png')} />
                    <Image source={require('../../../assets/images/star.png')} />
                    <Image source={require('../../../assets/images/star.png')} />
                    <Image source={require('../../../assets/images/star.png')} />
                    <Image source={require('../../../assets/images/star.png')} />
                    <Text style={{ color: '#ababab' }}> 1.278</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                  <Image
                    source={require('../../../assets/images/book.png')}
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
                    <Image source={require('../../../assets/images/star.png')} />
                    <Image source={require('../../../assets/images/star.png')} />
                    <Image source={require('../../../assets/images/star.png')} />
                    <Image source={require('../../../assets/images/star.png')} />
                    <Image source={require('../../../assets/images/star.png')} />
                    <Text style={{ color: '#ababab' }}> 1.278</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                  <Image
                    source={require('../../../assets/images/book.png')}
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
                    <Image source={require('../../../assets/images/star.png')} />
                    <Image source={require('../../../assets/images/star.png')} />
                    <Image source={require('../../../assets/images/star.png')} />
                    <Image source={require('../../../assets/images/star.png')} />
                    <Image source={require('../../../assets/images/star.png')} />
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

SeeMore.options = {
  topBar: {
    title: {
      text: 'See More',
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
  backButton: {
    marginTop: 25.5,
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
});
