import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {Table, Row} from 'react-native-table-component';
import {useSelector} from 'react-redux';

export const Details = () => {
  const head = [
    'Id',
    'Cedula',
    'Apellido_1',
    'Apellido_2',
    'Nombre_1',
    'Nombre_2',
    'Nacimiento',
    'Origen',
    'Genero',
    'Emision',
    'Expiracion',
  ];
  const data = useSelector((state: any) => state.dni.data);
  const format = data.split('<');
  const newData = format.splice(0, 11);
  let width = [];
  for (let index = 0; index < 11; index++) {
    width.push(180);
  }
  console.log('WIDTH=>', width);
  if (format.length < 2) {
    return (
      <>
        <Text>El codigo escaneado es solo un texto</Text>
        <Text>El valor: {data}</Text>
      </>
    );
  }
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          <Table>
            <Row
              widthArr={width}
              data={head}
              style={styles.head}
              textStyle={styles.text}
            />
          </Table>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
              <Row widthArr={width} data={newData} textStyle={styles.text} />
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  text: {
    padding: 10,
    textAlign: 'center',
  },
});
