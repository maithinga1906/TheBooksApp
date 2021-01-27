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
import orderListData from './orderListData';
Navigation.registerComponent('home', () => Home);
Navigation.registerComponent('search', () => Search);
const { width, height } = Dimensions.get('window');

export default class OrderList extends Component {
  render() {
    return (
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
          <FlatList
            data={orderListData}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity style={[styles.orderItemInfo]}>
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
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
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
