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
  Alert,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { NavigationUtils } from '../../navigations';
import Home from '../Home';
import Search from '../Home/Search';
import orderListData from './orderListData';
Navigation.registerComponent('home', () => Home);
Navigation.registerComponent('search', () => Search);
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/thebook-appicon';

export default class OrderList extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}
      >
        <View>
          <ScrollView>
            <View style={styles.container}>
              <View style={{ marginTop: 25.5 }}>
                <View style={styles.title}>
                  <Text style={styles.titleText}>Danh sách đơn hàng</Text>
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

            <View style={styles.orderItem}>
              {orderListData.map((item, index) => (
                <View>
                  <TouchableOpacity style={[styles.orderItemInfo]} index={index}>
                    <View style={[styles.spacingAround]}>
                      <Text style={{ color: '#4a4a4a' }}>{item.totalPrice}</Text>
                      <Text style={{ color: '#7f7f7f' }}>Mã: {item.code}</Text>
                    </View>

                    <View style={[styles.spacingAround]}>
                      <Text style={{ color: '#7f7f7f' }}>Ngày trả: {item.returnDate}</Text>
                      {item.status == 'Đang giữ' ? (
                        <Text style={{ color: '#fc9619' }}>{item.status}</Text>
                      ) : item.status == 'Đang mượn' ? (
                        <Text style={{ color: '#73c700' }}>{item.status}</Text>
                      ) : item.status == 'Đã trả' ? (
                        <Text style={{ color: '#1d9dd8' }}>{item.status}</Text>
                      ) : (
                        <Text style={{ color: '#fd4176' }}>{item.status}</Text>
                      )}
                    </View>
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
              ))}
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            border: 1,
            radius: 1,
            style: { marginVertical: 5 },
            bottom: 0,
            width: '100%',
            height: 60,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 25,
            borderTopColor: '#d9d9d9',
          }}
        >
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity onPress={() => NavigationUtils.startMainContent()}>
              <Icon name={'ic-book'} size={30} color={'#ababab'} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'order-list',
                  },
                })
              }
            >
              <Icon name={'ic-order'} size={30} color={'#2EA3DA'} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                position: 'absolute',
                alignSelf: 'center',
                backgroundColor: 'white',
                width: 70,
                height: 70,
                borderRadius: 35,
                bottom: 10,
                zIndex: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  Alert.alert('Profile');
                }}
              >
                <View style={[styles.button, styles.actionBtn]}>
                  <Image
                    style={{ width: 60, height: 60 }}
                    resizeMode="contain"
                    source={{
                      uri:
                        'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png',
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'notification',
                  },
                })
              }
            >
              <Icon name={'ic-notification-1'} size={30} color={'#ababab'} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <TouchableOpacity
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'cart',
                  },
                })
              }
            >
              <Icon name={'ic-cua-hang'} size={30} color={'#ababab'} style={{ marginBottom: 10 }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

OrderList.options = {
  topBar: {
    title: {
      text: 'OrderList',
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
