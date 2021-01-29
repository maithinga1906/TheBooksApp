/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/thebook-appicon';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Images from '../../themes/Images/images';
import rateCount from '../../components/rate';
import books from '../Home/Book/bookData';
import { Navigation } from 'react-native-navigation';

export default function Detail(props) {
  // static options(passProps) {
  //   return {
  //     topBar: {
  //       visible: false,
  //       drawBehind: true,
  //     },
  //   };
  // }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.icon}>
            <TouchableOpacity>
              <Icon name="ic-back" size={20} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="ic-like-pre" size={20} />
            </TouchableOpacity>
          </View>

          <View style={styles.image}>
            <Image source={props.item.image} />
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>{props.item.nameBook}</Text>
            <Text style={styles.author}>{props.item.author}</Text>

            <View style={{ flexDirection: 'row' }}>
              <View style={styles.rate}>{this.rateCount(props.item.rate)}</View>

              <View style={styles.price}>
                <Icon name="ic-price" color={Colors.yellow} size={15} />
                <Text style={{ color: Colors.grey }}>{props.item.view}</Text>
              </View>
            </View>

            <View style={styles.typeBook}>
              <TouchableOpacity style={styles.btnType}>
                <Text style={styles.btnText}>tình cảm</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnType}>
                <Text style={styles.btnText}>đời sống</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnType}>
                <Text style={styles.btnText}>học đường</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.description}>
              <Text style={styles.desContent}>
                {props.item.description}
                <TouchableOpacity>
                  <Text style={{ color: Colors.primary, fontSize: 15 }}>xem hết</Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 22.5 }}>
          <View style={[styles.spacingAround]}>
            <Text style={{ fontWeight: 'bold' }}>Sách mượn nhiều</Text>
            <TouchableOpacity style={styles.readMoreButton}>
              <Text style={styles.readMoreButtonText}>Xem hết</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.scrollViewHolder}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {books.map((item, index) => (
                <View>
                  {item.category == props.item.category ? (
                    <TouchableOpacity
                      style={styles.item}
                      onPress={() =>
                        Navigation.push(this.props.componentId, {
                          component: {
                            name: 'detail',
                            passProps: {
                              data: item,
                            },
                          },
                        })
                      }
                    >
                      <Image source={item.image} style={styles.imageItem} />
                      <Text numberOfLines={1} style={{ color: '#4a4a4a' }}>
                        {item.nameBook.length < 14
                          ? `${item.nameBook}`
                          : `${item.nameBook.substring(0, 14)}...`}
                      </Text>
                      <Text style={{ color: '#ababab' }}>{item.author}</Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        {this.rateCount(`${item.rate}`)}
                        <Text style={{ color: '#ababab' }}> 1.278</Text>
                      </View>
                    </TouchableOpacity>
                  ) : null}
                </View>
              ))}
            </ScrollView>
          </View>
        </View>

        <View style={styles.comment}>
          <Text style={styles.commentTitle}>Nhận xét</Text>

          <TouchableOpacity style={styles.commentBut}>
            <Text style={{ color: Colors.primary, fontSize: 15 }}>
              Viết nhận xét cho cuốn sách này
            </Text>
          </TouchableOpacity>

          <View style={styles.viewComment}>
            <View style={styles.info}>
              <Image source={Images.avatar} style={styles.avt} />
              <View style={styles.infoRate}>
                <View>
                  <Text style={styles.name}>Kim Dung</Text>
                  <View style={styles.rate}>
                    <Icon name="star" color={Colors.yellow} size={15} />
                    <Icon name="star" color={Colors.yellow} size={15} />
                    <Icon name="star" color={Colors.yellow} size={15} />
                    <Icon name="star" color={Colors.yellow} size={15} />
                    <Icon name="ic-star-pre" color={Colors.yellow} size={15} />
                  </View>
                </View>

                <View style={styles.btn}>
                  <TouchableOpacity>
                    <Icon name="ic-edit-comment" size={20} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon name="ic-trash" size={20} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  avt: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  container: {
    flex: 1,
  },
  topContainer: {
    paddingTop: 25.5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    paddingLeft: 75,
  },
  content: {
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 20,
    color: Colors.black,
  },
  author: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 15,
    color: Colors.grey,
  },
  rate: {
    flexDirection: 'row',
    marginRight: 6,
    paddingTop: 4,
  },
  name: {
    fontSize: 15,
  },
  btn: {
    flexDirection: 'row',
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  typeBook: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  btnType: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    width: 70,
    height: 27,
    borderColor: Colors.lightGrey,
    borderWidth: 1,
    borderRadius: 3,
  },
  btnText: {
    fontSize: 12,
    color: Colors.lightGrey,
  },
  description: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },
  desContent: {
    fontFamily: 'SVN-ProximaNovaLight',
    fontSize: 15,
    color: Colors.grey,
  },
  similarBook: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  sbTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sbTopTitle: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 20,
    color: Colors.black,
  },
  commentTitle: {
    fontFamily: 'SVN-ProximaNova',
    fontSize: 20,
    color: Colors.black,
    marginTop: 16,
  },
  commentBut: {
    width: '100%',
    height: 40,
    borderColor: Colors.primary,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  viewComment: {
    padding: 15,
  },
  info: {
    flexDirection: 'row',
  },
  infoRate: {
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});