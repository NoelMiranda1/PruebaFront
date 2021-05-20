import React, {useEffect, useRef, useState} from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {useDispatch} from 'react-redux';
import {setData} from '../../store/actions/dni';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/core';

export const Home: React.FC = () => {
  const scanner = useRef(null);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const onSuccess = (e: any) => {
    const value = e.data;
    console.log('Lectura culquiera=>', value);
    setModalVisible(true);
    dispatch(setData(value));
  };

  return (
    <>
      <Modal isVisible={isModalVisible}>
        <View style={[styles.modal, {height: 150}]}>
          <Text>Los resultados completos a continuacion </Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              borderRadius: 20,
              margin: 20,
              padding: 10,
            }}
            onPress={() => {
              setModalVisible(false);
              navigation.navigate('Formulario');
            }}>
            <Text style={{color: '#fff'}}>Mas datos</Text>
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
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 100,
  },
});