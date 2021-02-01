import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import Search from '../Home/Search';
Navigation.registerComponent('search', () => Search);
const { width, height } = Dimensions.get('screen');
import AwesomeAlert from 'react-native-awesome-alerts';
import { NavigationUtils } from '../../navigations';
import Icon from 'react-native-vector-icons/thebook-appicon';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { removeSuccess: false, orderSuccess: false };
  }

  showRemoveSuccessAlert = () => {
    this.setState({
      removeSuccess: true,
    });
  };

  hideRemoveSuccessAlert = () => {
    this.setState({
      removeSuccess: false,
    });
  };

  showOrderSuccessAlert = () => {
    this.setState({
      orderSuccess: true,
    });
  };

  hideOrderSuccessAlert = () => {
    this.setState({
      orderSuccess: false,
    });
  };
  render() {
    const { orderSuccess, removeSuccess } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{ marginTop: 25.5 }}>
            <View style={styles.spacingAround}>
              <TouchableOpacity onPress={() => NavigationUtils.startMainContent()}>
                <Icon name="ic-back" size={18} />
              </TouchableOpacity>
              <Text style={{ fontWeight: 'bold' }}>Giỏ hàng</Text>
              <TouchableOpacity onPress={() => this.showRemoveSuccessAlert()}>
                <Icon name="ic-trash" size={18} />
              </TouchableOpacity>
              <AwesomeAlert
                show={removeSuccess}
                showProgress={false}
                message="Sách đã được xóa khỏi giỏ hàng của bạn"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="Cám ơn"
                confirmButtonColor="#FC9619"
                onCancelPressed={() => {
                  this.hideRemoveSuccessAlert();
                }}
                onConfirmPressed={() => {
                  this.hideRemoveSuccessAlert();
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: '#e9e9e9',
            borderBottomWidth: 1,
            width: width,
            padding: 0,
            marginTop: 9,
          }}
        ></View>

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
                  <Text style={[styles.bookTitle]}>Tên bạn là gì?</Text>
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
                    <Icon name="star" color={Colors.yellow} size={15} />
                    <Icon name="star" color={Colors.yellow} size={15} />
                    <Icon name="star" color={Colors.yellow} size={15} />
                    <Icon name="star" color={Colors.yellow} size={15} />
                    <Icon name="ic-star-pre" color={Colors.yellow} size={15} />
                  </View>
                  <Text style={{ color: '#ababab', marginRight: 90 }}> 145</Text>
                </View>

                <View style={[styles.spacingAround, { marginTop: 35.25 }]}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                    }}
                  >
                    <Icon name="ic-book-1" color={Colors.yellow} size={18} />
                    <Text style={{ color: '#ababab', marginLeft: 4.5 }}> 04 quyển</Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                    }}
                  >
                    <Icon name="ic-price" color={Colors.yellow} size={18} />
                    <Text style={{ color: '#ababab', marginLeft: 4.5 }}> 36.000</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => this.showOrderSuccessAlert()}>
          <View style={[styles.bottomBtn]}>
            <Text style={{ color: 'white' }}>Đặt sách</Text>
          </View>
        </TouchableOpacity>
        <AwesomeAlert
          show={orderSuccess}
          showProgress={false}
          message={`
          Sách đã được đặt thành công!
      Bạn có thể theo dõi tại mục cá nhân
          `}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Cám ơn"
          confirmButtonColor="#FC9619"
          onCancelPressed={() => {
            this.hideOrderSuccessAlert();
          }}
          onConfirmPressed={() => {
            this.hideOrderSuccessAlert();
          }}
        />
      </ScrollView>
    );
  }
}

Cart.options = {
  topBar: {
    title: {
      text: 'Cart',
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
    borderRadius: 4,
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
  bottomBtn: {
    width: width,
    backgroundColor: '#FC9619',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    flexDirection: 'row',
    flex: 1,
  },
});
