import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import books from './bookData';
import { NavigationUtils } from '../../../navigations';
import rateCount from '../../../components/rate';
import styles from './styles';
import bookCount from './bookCount';

export default class NewBook extends Component {
  render() {
    return (
      <View style={{ marginTop: 22.5 }}>
        <View style={[styles.spacingAround]}>
          <Text style={{ fontWeight: 'bold' }}>Sách mới ({bookCount(books, 'Sách mới')})</Text>
          <TouchableOpacity
            style={styles.readMoreButton}
            onPress={() => NavigationUtils.startSeeMoreContent('Sách mới')}
          >
            {bookCount(books, 'Sách mới') > 3 ? (
              <Text style={styles.readMoreButtonText}>Xem hết</Text>
            ) : null}
          </TouchableOpacity>
        </View>
        <View style={styles.scrollViewHolder}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {books.map((item, index) => (
              <View>
                {item.category == 'Sách mới' ? (
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
    );
  }
}
