import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Intro3 = () => {
  return (
    <View>
      <View style={styles.poster}>
        <Image source={require('../../assets/Images/reporter.png')} style={styles.pic} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Tận hưởng cuốn sách</Text>
        <Text style={styles.detail}>
          Chọn một nơi yêu thích và tận hưởng cuốn sách mà mình yêu thích thôi nào.
        </Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.btnStart}>
          <Text style={styles.btnText}>Bắt Đầu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  poster: {
    flex: 1,
    alignItems: 'center',
    marginTop: 117,
  },
  pic: {
    width: 250,
    height: 250,
  },
  content: {
    alignItems: 'center',
    marginTop: 300,
  },
  title: {
    color: '#262626',
    fontSize: 16,
    fontFamily: 'Cochin',
  },
  detail: {
    textAlign: 'center',
    width: 240,
    fontSize: 13,
    marginTop: 12,
    color: '#7f7f7f',
  },
  button: {
    alignItems: 'center',
  },
  btnStart: {
    marginTop: 20,
    backgroundColor: Colors.primary,
    width: 106,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  btnText: {
    color: Colors.white,
    fontWeight: '600',
  }
});
export default Intro3;
