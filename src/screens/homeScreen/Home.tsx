import React, {useEffect, useRef, useState} from 'react';

import {StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/core';

export const Home = () => {
  const scanner = useRef(null);
  const [scan, setScan] = useState(false);
  const [result, setResult] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    setResult(null);
  }, []);

  const onSuccess = (e: any) => {
    const value = e.data;
    const newValue = value.split('<');
    console.log('Lectura=>', newValue);
    console.log('Lectura culquiera=>', value);
    setModalVisible(true);
    setResult(newValue[0]);
  };

  return !scan ? (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonTouchable}
        onPress={() => setScan(true)}>
        <Text style={styles.buttonText}>Comienza a escanear</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <>
      <Modal isVisible={isModalVisible}>
        <View style={{flex: 1}}>
          <Text>ID:{result}</Text>
          <Text>Los resultados completos a continuacion </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Info')}>
            <Text>Mas datos</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <QRCodeScanner
        cameraStyle={{height: '100%'}}
        ref={scanner}
        onRead={onSuccess}
        reactivate
        showMarker
      />
    </>
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
});
