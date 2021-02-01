import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { NavigationUtils } from '../../../navigations';
import Home from '../index';
const screenWidth = Dimensions.get('screen').width - 40;
Navigation.registerComponent('home', () => Home);
import Icon from 'react-native-vector-icons/thebook-appicon';
import books from '../Book/bookData';
import rateCount from '../../../components/rate';

export default function SeeMore(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => NavigationUtils.startMainContent()}
        >
          <Icon name="ic-back" size={20} />
        </TouchableOpacity>
        <View style={{ padding: 18.75 }}>
          <View style={[styles.filterTitle]}>
            <Text style={{ fontWeight: 'bold', fontSize: 25 }}>{props.values}</Text>
          </View>
          <View style={styles.scrollViewHolder}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
            >
              {books.map((item, index) => (
                <View>
                  {item.category == props.values ? (
                    <TouchableOpacity
                      style={styles.item}
                      onPress={() => NavigationUtils.startDetailContent(item)}
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
                          width: 100,
                        }}
                      >
                        {rateCount(`${item.rate}`)}
                        <Text style={{ color: '#ababab' }}> {item.view}</Text>
                      </View>
                    </TouchableOpacity>
                  ) : null}
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

SeeMore.options = {
  topBar: {
    title: {
      text: 'See More',
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
  backButton: {
    marginTop: 25.5,
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
    paddingRight: 18.75,
    paddingTop: 7.5,
  },
  imageItem: {
    width: screenWidth / 2 - 25,
    height: 250,
  },
  filterTitle: {
    marginTop: 12.75,
    marginBottom: 7.5,
  },
});
