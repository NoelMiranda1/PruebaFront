import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonTouchable}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Comienza a escanear</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 100,
  },
});
