import {useNavigation} from '@react-navigation/core';
import {styles} from 'config/globalStyle';
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

export const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.globalContainer}>
      <View style={{top: -50, alignItems: 'center'}}>
        <Image style={style.img} source={require('@assets/image/qr.jpg')} />
        <View style={style.card}>
          <Text style={style.text}>
            Bienvenidos a la prueba de frontend, consiste en poder escanear un
            documento de identidad que contenga QR y recoger los datos y
            almacenarlos en una tabla, en este caso he usado las cedulas
            Nicaraguenses ya que no se que data traen los codigos Qr de las
            panameñas
          </Text>
        </View>
        <TouchableOpacity
          style={styles.globalTouchable}
          onPress={() => navigation.navigate('Home')}>
          <Text style={style.buttonText}>Comienza a escanear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
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
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 100,
  },
  img: {
    resizeMode: 'contain',
    height: 250,
    marginTop: 50,
    borderRadius: 500,
  },
  card: {
    backgroundColor: '#40b3d6',
    padding: 5,
    margin: 15,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    padding: 10,
    fontSize: 15,
  },
});
