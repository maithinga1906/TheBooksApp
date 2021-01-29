import React, { Component } from 'react';
import { Alert, Dimensions } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Navigation } from 'react-native-navigation';
import TextInputComponent from '../Login/TextInputComponent';
import Register from '../Register/Register';
import { NavigationUtils } from '../../navigations';
import AwesomeAlert from 'react-native-awesome-alerts';
import BottomNavigator from '../BottomNavigator';
import Icon from 'react-native-vector-icons/thebook-appicon';

const windowWidth = Dimensions.get('window').width - 40;
Navigation.registerComponent('register', () => Register);
Navigation.registerComponent('bottomNavigator', () => BottomNavigator);

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { loginSuccess: false };
  }

  showLoginSuccessAlert = () => {
    this.setState({
      loginSuccess: true,
    });
    Navigation.push(this.props.componentId, {
      component: {
        name: 'bottomNavigator',
      },
    });
  };

  hideLoginSuccessAlert = () => {
    this.setState({
      loginSuccess: false,
    });
  };

  render() {
    const { loginSuccess } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.centerView}>
            <TextInputComponent
              title={'Tài khoản'}
              styles={[styles.inputBox, styles.colorGreyishBrown]}
              keyboardType={'default'}
              placeholder={'Nhập tài khoản'}
            />
            <TextInputComponent
              title={'Mật khẩu'}
              styles={styles.inputBox}
              secureTextEntry={true}
              placeholder={'Nhập mật khẩu'}
            />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => this.showLoginSuccessAlert()}
            >
              <Text style={styles.loginButtonText}> Đăng nhập</Text>
              <AwesomeAlert
                show={loginSuccess}
                showProgress={false}
                message="Đăng nhập thành công!"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="OK"
                confirmButtonColor="#FC9619"
                onCancelPressed={() => {
                  this.hideLoginSuccessAlert();
                }}
                onConfirmPressed={() => {
                  this.hideLoginSuccessAlert();
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.signupButton}
              onPress={() =>
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'register',
                  },
                })
              }
            >
              <Text style={styles.signupButtonText}> Đăng ký</Text>
            </TouchableOpacity>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={styles.forgotPasswordButton}>
              <Text style={styles.forgotPasswordButtonText}> Quên mật khẩu?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

Login.options = {
  topBar: {
    title: {
      text: 'Đăng nhập',
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
  },
  loginButton: {
    backgroundColor: '#41B8C1',
    borderColor: '#41B8C1',
    borderRadius: 1,
    borderWidth: 1,
    width: windowWidth / 2 - 40,
    marginVertical: 10,
    paddingVertical: 13,
    marginLeft: 36,
  },
  signupButton: {
    backgroundColor: 'white',
    borderColor: '#41B8C1',
    borderWidth: 1,
    width: windowWidth / 2 - 40,
    borderRadius: 1,
    marginVertical: 10,
    paddingVertical: 13,
    marginRight: 36,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    alignContent: 'center',
  },
  signupButtonText: {
    color: '#A4A4A4',
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
