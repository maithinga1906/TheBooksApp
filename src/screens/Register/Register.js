import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Navigation } from 'react-native-navigation';
import TextInputComponent from '../Register/TextInputComponent';
import Login from '../Login/Login';

const windowWidth = Dimensions.get('window').width - 40;
Navigation.registerComponent('login', () => Login);

export default class Register extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.centerView}>
            <TextInputComponent
              title={'Tên người dùng'}
              styles={[styles.inputBox, styles.colorGreyishBrown]}
              keyboardType={'default'}
            />
            <TextInputComponent
              title={'Email'}
              styles={[styles.inputBox, styles.colorGreyishBrown]}
              keyboardType={'default'}
            />
            <TextInputComponent
              title={'Số điện thoại'}
              styles={[styles.inputBox, styles.colorGreyishBrown]}
              keyboardType={'default'}
            />
            <TextInputComponent
              title={'Tên tài khoản'}
              styles={[styles.inputBox, styles.colorGreyishBrown]}
              keyboardType={'default'}
            />
            <TextInputComponent
              title={'Mật khẩu'}
              styles={styles.inputBox}
              secureTextEntry={true}
            />
            <TextInputComponent
              title={'Xác nhận mật khẩu'}
              styles={styles.inputBox}
              secureTextEntry={true}
            />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 25.5 }}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'login',
                  },
                })
              }
            >
              <Text style={styles.loginButtonText}>Đăng nhập</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signupButton}>
              <Text style={styles.signupButtonText}>Đăng ký</Text>
            </TouchableOpacity>
          </View>

          <Text style={{ padding: 24, marginTop: 11, marginBottom: 11, color: '#ababab' }}>
            Bằng việc xác nhận tạo tài khoản, bạn đã đồng ý với các{' '}
            <Text style={{ color: '#62B4BA', fontWeight: 'bold' }}>điều khoản quy định</Text> của
            chúng tôi.
          </Text>
        </View>
      </ScrollView>
    );
  }
}

Register.options = {
  topBar: {
    title: {
      text: 'Đăng ký',
      color: 'black',
      alignment: 'center',
      fontWeight: 'bold',
    },
    backButton: {
      visible: true,
    },
    leftButtons: [
      {
        id: 'close',
        icon: require('../../assets/images/close.png'),
      },
    ],
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerView: {
    padding: 15,
  },
  inputBox: {
    width: windowWidth,
    backgroundColor: 'white',
    borderRadius: 1,
    borderWidth: 1,
    paddingHorizontal: 16,
    fontSize: 16,
    borderColor: '#EBEBEB',
    marginVertical: 10,
    marginTop: 7.5,
    marginBottom: 15,
    color: '#4a4a4a',
  },
  loginButton: {
    backgroundColor: 'white',
    borderColor: '#41B8C1',
    borderRadius: 1,
    borderWidth: 1,
    width: windowWidth / 2 - 40,
    marginVertical: 10,
    paddingVertical: 13,
    marginLeft: 36,
  },
  signupButton: {
    backgroundColor: '#41B8C1',
    borderColor: '#41B8C1',
    borderWidth: 1,
    width: windowWidth / 2 - 40,
    borderRadius: 1,
    marginVertical: 10,
    paddingVertical: 13,
    marginRight: 36,
  },
  loginButtonText: {
    color: '#A4A4A4',
    fontSize: 20,
    textAlign: 'center',
    alignContent: 'center',
  },
  signupButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    alignContent: 'center',
  },
  forgotPasswordButtonText: {
    color: '#C0C0C0',
  },
  colorGreyishBrown: {
    color: '#4a4a4a',
  },
});
