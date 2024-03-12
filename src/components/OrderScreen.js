import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const OrderScreen = () => {
  // Sample data for demonstration
  const orderDetails = {
    orderNumber: '123456',
    items: [
      { id: 1, title: 'Product 1', quantity: 1, price: '20.00' },
      { id: 2, title: 'Product 2', quantity: 2, price: '40.00' }
    ],
    total: '60.00',
    deliveryStatus: 'On the way',
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.orderInfo}>
        <Text style={styles.orderNumber}>Order Number: {orderDetails.orderNumber}</Text>
        <Text style={styles.status}>Status: {orderDetails.deliveryStatus}</Text>
      </View>
      <View style={styles.itemsList}>
        {orderDetails.items.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Text>Price: €{item.price}</Text>
          </View>
        ))}
      </View>
      <View style={styles.total}>
        <Text style={styles.totalText}>Total: €{orderDetails.total}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  orderInfo: {
    marginBottom: 20,
  },
  orderNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 16,
    marginTop: 5,
  },
  itemsList: {
    marginBottom: 20,
  },
  item: {
    marginBottom: 15,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  total: {
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OrderScreen;
