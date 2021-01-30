import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import SeeMore from './SeeMore';
import WellReadBook from './Book/wellReadBook';
import NewBook from './Book/newBook';
import Detail from '../Detail';
import BorrowTheMostBooks from './Book/borrowTheMostBooks';
import FavouritedBooks from './Book/favouritedBooks';
import Icon from 'react-native-vector-icons/thebook-appicon';
import { NavigationUtils } from '../../navigations';

Navigation.registerComponent('see-more', () => SeeMore);
Navigation.registerComponent('detail', () => Detail);

export default class Home extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.spacingAround}>
          <TouchableOpacity onPress={() => NavigationUtils.startSearchContent()}>
            <Icon name="ic-menu" size={18} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => NavigationUtils.startSearchContent()}>
            <Icon name="ic-search" size={18} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          {/* Đọc nhiều */}
          <WellReadBook />
          {/* Sách mới */}
          <NewBook />
          {/* Sách mượn nhiều */}
          <BorrowTheMostBooks />
          {/* Sách được yêu thích */}
          <FavouritedBooks />
        </View>
      </ScrollView>
    );
  }
}

Home.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'black',
      alignment: 'center',
      fontWeight: 'bold',
    },
    backButton: {
      visible: false,
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
    padding: 15,
    top: 15,
  },
});
