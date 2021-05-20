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
  const [type, setType] = useState('');
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const onSuccess = (e: any) => {
    const value = e.data;
    setModalVisible(true);
    dispatch(setData(value));
    setType(e.type);
  };

  return (
    <>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modal}>
          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
            Se ha escaneado correctamente el codigo de tipo: {type}
          </Text>
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
            <Text style={{color: '#fff'}}>Mostrar datos</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
});
