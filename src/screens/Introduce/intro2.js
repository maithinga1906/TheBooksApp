import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Intro2 = () => {
  return (
    <View>
      <View style={styles.poster}>
        <Image source={require('../../assets/Images/cart.png')} style={styles.pic} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Lưu vào giỏ và đặt sách</Text>
        <Text style={styles.detail}>
          Sách sẽ được giữ trong 2 giờ đồng hồ Hãy chắc chắn là bạn đến nhận kịp giờ
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
export default Intro2;
