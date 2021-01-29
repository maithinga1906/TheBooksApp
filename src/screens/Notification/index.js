import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
  Alert,
  Image,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { NavigationUtils } from '../../navigations';
import Search from '../Home/Search';
import SeeMore from '../Home/SeeMore';
import notifyData from './notifyData';
Navigation.registerComponent('search', () => Search);
const { width, height } = Dimensions.get('window');
Navigation.registerComponent('see-more', () => SeeMore);
import Icon from 'react-native-vector-icons/thebook-appicon';

export default class Notification extends Component {
  render() {
    const getCurrentDate = (data) => {
      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      var date = new Date(data).getDate();
      var month = new Date(data).getMonth() + 1;
      var year = new Date(data).getFullYear();
      var hours = new Date(data).getHours();
      var min = new Date(data).getMinutes();

      var currentDate = new Date().getDate();
      var currentMonth = new Date().getMonth() + 1;
      var currentYear = new Date().getFullYear();
      if (currentYear == year && currentMonth == month) {
        if (currentDate == date) {
          return hours + ':' + min;
        } else if (currentDate > date) {
          var dayLeft = currentDate - date;
          if (dayLeft == 1) {
            return 'hôm qua, ' + hours + ':' + min;
          } else return dayLeft + ' ngày trước, ' + hours + ':' + min;
        }
      }

      return date + ' ' + monthNames[month] + ', ' + year + ', ' + hours + ':' + min;
    };
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}
      >
        <View style={{ marginBottom: 70 }}>
          <ScrollView>
            <View style={styles.container}>
              <View style={{ marginTop: 25.5 }}>
                <View style={styles.title}>
                  <Text style={styles.titleText}>Thông báo</Text>
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
            {notifyData.map((item, index) => (
              <View>
                <TouchableOpacity style={styles.notifyItem}>
                  {item.title == 'Thông báo' ? (
                    <View style={[styles.borderNotifyIcon, styles.borderIcon]}>
                      <Icon name={item.icon} size={25} color={'white'} />
                    </View>
                  ) : item.title == 'Mượn sách' ? (
                    <View style={[styles.borderBorrowIcon, styles.borderIcon]}>
                      <Icon name={item.icon} size={25} color={'white'} />
                    </View>
                  ) : (
                    <View style={[styles.borderPromotionIcon, , styles.borderIcon]}>
                      <Icon name={item.icon} size={25} color={'white'} />
                    </View>
                  )}
                  <View>
                    <View style={styles.spacingAround}>
                      <Text style={{ color: '#4a4a4a', fontSize: 25 }}>{item.title}</Text>
                      <Text style={{ color: '#4a4a4a', marginRight: 42 }}>
                        {getCurrentDate(item.date)}{' '}
                      </Text>
                    </View>

                    <Text style={{ color: '#4a4a4a', marginRight: 42 }}>{item.content}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
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
              <Icon name={'ic-notification-1'} size={30} color={'#2EA3DA'} />
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

Notification.options = {
  topBar: {
    title: {
      text: 'Notification',
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
  notifyItem: {
    flexDirection: 'row',
    marginTop: 9,
    marginBottom: 9,
    padding: 15,
  },
  borderBorrowIcon: {
    borderColor: '#eb6f6f',
    backgroundColor: '#eb6f6f',
  },
  borderPromotionIcon: {
    borderColor: '#7ed321',
    backgroundColor: '#7ed321',
  },
  borderNotifyIcon: {
    borderColor: '#f5a623',
    backgroundColor: '#f5a623',
  },
  borderIcon: {
    height: 40,
    width: 40,
    borderRadius: 30,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginRight: 7.5,
  },
});
