import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Home from '../Home';
import { Navigation } from 'react-native-navigation';
import OrderList from '../OrderList';
import Notification from '../Notification';
import Cart from '../Cart';
import { NavigationUtils } from '../../navigations';
Navigation.registerComponent('order-list', () => OrderList);
Navigation.registerComponent('notification', () => Notification);
Navigation.registerComponent('cart', () => Cart);
Navigation.registerComponent('home', () => Home);
import Icon from 'react-native-vector-icons/thebook-appicon';

export default class BottomNavigator extends Component {
  toggleOpen = () => {};

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}
      >
        <View style={{ marginBottom: 70 }}>
          <Home style={{ marginBottom: 75 }} />
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
              <Icon name={'ic-book'} size={30} color={'#2EA3DA'} />
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
              <Icon name={'ic-order'} size={30} color={'#ababab'} />
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

BottomNavigator.options = {
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
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  button: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'white',
    shadowOffset: { x: 2, y: 0 },
    shadowRadius: 2,
    borderRadius: 30,
    borderColor: 'white',
    bottom: 20,
    right: 0,
    top: 5,
    left: 5,
    shadowOpacity: 5.0,
  },
  actionBtn: {
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
});
