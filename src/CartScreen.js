import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import useCartStore from './cartStore';

const CartScreen = () => {
  const {items} = useCartStore();

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    items.forEach(item => {
      totalPrice += item.price;
    });
    return totalPrice;
  };
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemName}>{item.price}</Text>
    </View>
  );
  console.log('all items ', items);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Items:</Text>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <Text style={[styles.totalPrice, {color: 'red'}]}>
        Total Price: ${calculateTotalPrice()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listContainer: {
    flexGrow: 1,
  },
  itemContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  itemName: {
    fontSize: 16,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default CartScreen;
