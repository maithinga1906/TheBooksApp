/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class IntroComponent extends React.PureComponent {
  render() {
    const { data } = this.props;
    const { imageSource, title, subTitle, statusButton } = data;
    return (
      <View style={styles.slide}>
        <View style={{ justifyContent: 'flex-end' }}>
          <Image
            source={imageSource}
            style={{
              height: 230,
              width: 300,
            }}
          />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
        {statusButton === true ? (
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Bắt Đầu</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    top: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    paddingHorizontal: 25,
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'SVN-ProximaNova',
    fontSize: 22,
  },
  subTitle: {
    paddingHorizontal: 10,
    lineHeight: 27,
    marginTop: 15,
    textAlign: 'center',
    fontFamily: 'SVN-ProximaNova',
    fontSize: 19,
    color: Colors.darkGray,
  },
  buttonGroup: {
    alignItems: 'center',
    flexDirection: 'column-reverse',
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: Colors.primary,
    width: 130,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  textButton: {
    fontSize: 15,
    color: Colors.white,
  },
});
