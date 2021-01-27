import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import SeeMore from '../SeeMore/index';
Navigation.registerComponent('see-more', () => SeeMore);

export default class NewBook extends Component {
  render() {
    return (
      <View style={{ marginTop: 22.5 }}>
        <View style={[styles.spacingAround]}>
          <Text style={{ fontWeight: 'bold' }}>Sách mới (47)</Text>
          <TouchableOpacity
            style={styles.readMoreButton}
            onPress={() =>
              Navigation.push(this.props.componentId, {
                component: {
                  name: 'see-more',
                },
              })
            }
          >
            <Text style={styles.readMoreButtonText}>Xem hết</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.scrollViewHolder}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.item}>
              <Image source={require('../../../assets/images/book.png')} style={styles.imageItem} />
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
                <Text style={{ color: '#ababab' }}> 1.278</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
              <Image source={require('../../../assets/images/book.png')} style={styles.imageItem} />
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
                <Text style={{ color: '#ababab' }}> 1.278</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
              <Image source={require('../../../assets/images/book.png')} style={styles.imageItem} />
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
                <Text style={{ color: '#ababab' }}> 1.278</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item}>
              <Image source={require('../../../assets/images/book.png')} style={styles.imageItem} />
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
                <Text style={{ color: '#ababab' }}> 1.278</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}
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
