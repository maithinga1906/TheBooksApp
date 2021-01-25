import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Intro1 = () => {
  return (
    <View>
      <View style={styles.poster}>
        <Image source={require('../../assets/Images/library.png')} style={styles.pic} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Tìm sách yêu thích</Text>
        <Text style={styles.detail}>
          Rất nhiều cuốn sách hay và chương trình thú vị được tích hợp trên hệ thống
        </Text>
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
});
export default Intro1;
