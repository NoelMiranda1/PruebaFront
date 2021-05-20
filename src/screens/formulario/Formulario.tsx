import {useNavigation} from '@react-navigation/core';
import {styles} from 'config/globalStyle';
import {useForm} from 'hooks/useForm';
import React from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';

import {useSelector} from 'react-redux';

interface Inputs {
  id: string;
  cedula: string;
  apellido_1: string;
  apellido_2: string;
  nombre_1: string;
  nombre_2: string;
  nacimiento: string;
  origen: string;
  genero: string;
  emision: string;
  expiracion: string;
}

export const Formulario: React.FC = () => {
  const data = useSelector((state: any) => state.dni.data);
  const format = data.split('<');
  const newData = format.splice(0, 11);
  const {form, onChange} = useForm<Inputs>({
    id: newData[0],
    cedula: newData[1],
    apellido_1: newData[2],
    apellido_2: newData[3],
    nombre_1: newData[4],
    nombre_2: newData[5],
    nacimiento: newData[6],
    origen: newData[7],
    genero: newData[8],
    emision: newData[9],
    expiracion: newData[10],
  });
  const navigation = useNavigation();
  const validate = () => {
    if (
      form.apellido_1 !== '' &&
      form.apellido_2 !== '' &&
      form.cedula !== '' &&
      form.emision !== '' &&
      form.expiracion !== '' &&
      form.genero !== '' &&
      form.id !== '' &&
      form.nacimiento !== '' &&
      form.nombre_1 !== '' &&
      form.nombre_2 !== '' &&
      form.origen !== ''
    ) {
      navigation.navigate('Info');
    } else {
      Alert.alert('Error', 'Todos los campos deben de contener su valor');
    }
  };
  if (format.length < 2) {
    return (
      <View style={styles.globalContainer}>
        <Text style={styles.text}>El codigo escaneado es solo un texto</Text>
        <Text style={styles.text}>Resultado: {data}</Text>
      </View>
    );
  }
  return (
    <View style={styles.globalMargin}>
      <Text style={{textAlign: 'center'}}>Formulario</Text>
      <TextInput
        placeholder="Id"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={e => onChange(e, 'id')}
        value={form.id}
      />
      <TextInput
        placeholder="Cedula"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={e => onChange(e, 'cedula')}
        value={form.cedula}
      />
      <TextInput
        placeholder="Primer Apellido"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={e => onChange(e, 'apellido_1')}
        value={form.apellido_1}
      />
      <TextInput
        placeholder="Segundo Apellido"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={e => onChange(e, 'apellido_2')}
        value={form.apellido_2}
      />
      <TextInput
        placeholder="Primer Nombre"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={e => onChange(e, 'nombre_1')}
        value={form.nombre_1}
      />
      <TextInput
        placeholder="Segundo Nombre"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={e => onChange(e, 'nombre_2')}
        value={form.nombre_2}
      />
      <TextInput
        placeholder="Fecha de nacimiento"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={e => onChange(e, 'nacimiento')}
        value={form.nacimiento}
      />
      <TextInput
        placeholder="Lugar de nacimiento"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={e => onChange(e, 'origen')}
        value={form.origen}
      />
      <TextInput
        placeholder="Genero"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={e => onChange(e, 'genero')}
        value={form.genero}
      />
      <TextInput
        placeholder="Emision"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={e => onChange(e, 'emision')}
        value={form.emision}
      />
      <TextInput
        placeholder="Expiracion"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={e => onChange(e, 'expiracion')}
        value={form.expiracion}
      />
      <TouchableOpacity onPress={validate}>
        <Text>Ir a la tabla</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Volver a escanear</Text>
      </TouchableOpacity>
      <Text>{JSON.stringify(form, null, 4)}</Text>
    </View>
  );
};
