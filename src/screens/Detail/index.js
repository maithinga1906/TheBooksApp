import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Images from '../../themes/Images/images';

class Detail extends Component {
  static options(passProps) {
    return {
      topBar: {
        visible: false,
        drawBehind: true,
      },
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.topContainer}>
          <View>
            <Icon name="ic-back" />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Detail;

const styles = StyleSheet.create({
  wrapper: {},
  txtContinue: {
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    width: 145,
    borderRadius: 5,
    height: 45,
  },
  textButton: { fontSize: 18 },
  bottomContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'space-around',
  },
  topContainer: {
    flex: 4,
    backgroundColor: Colors.white,
  },
});
