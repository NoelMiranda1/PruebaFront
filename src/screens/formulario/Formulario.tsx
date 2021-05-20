import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {styles} from 'config/globalStyle';
import {useForm} from 'hooks/useForm';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

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
  const [more, setMore] = useState(false);
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
      <View style={[styles.globalContainer, style.top]}>
        <Image
          style={style.img}
          source={require('@assets/image/qr-code.png')}
        />
        <View style={style.containerText}>
          <Text style={style.text}>El codigo escaneado es solo un texto</Text>
          <Text style={style.text}>Resultado: {data}</Text>
        </View>
      </View>
    );
  }

  return more === false ? (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={style.container}>
        <ScrollView style={{margin: 20}}>
          <Text style={style.title}>Formulario</Text>
          <Text style={style.text2}>ID:</Text>
          <TextInput
            style={style.input}
            placeholder="Id"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={e => onChange(e, 'id')}
            value={form.id}
          />
          <Text style={style.text2}>Cedula:</Text>
          <TextInput
            style={style.input}
            placeholder="Cedula"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={e => onChange(e, 'cedula')}
            value={form.cedula}
          />
          <Text style={style.text2}>Primer Apellido:</Text>
          <TextInput
            style={style.input}
            placeholder="Primer Apellido"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={e => onChange(e, 'apellido_1')}
            value={form.apellido_1}
          />
          <Text style={style.text2}>Segundo Apellido:</Text>
          <TextInput
            style={style.input}
            placeholder="Segundo Apellido"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={e => onChange(e, 'apellido_2')}
            value={form.apellido_2}
          />
          <Text style={style.text2}>Primer Nombre:</Text>
          <TextInput
            style={style.input}
            placeholder="Primer Nombre"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={e => onChange(e, 'nombre_1')}
            value={form.nombre_1}
          />
          <Text style={style.text2}>Segundo Nombre:</Text>
          <TextInput
            style={style.input}
            placeholder="Segundo Nombre"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={e => onChange(e, 'nombre_2')}
            value={form.nombre_2}
          />

          <View style={{alignItems: 'center'}}>
            {/* onPress={validate} */}
            <TouchableOpacity
              onPress={() => setMore(true)}
              style={styles.globalTouchable}>
              <Text style={style.text}>Mostrar mas</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  ) : (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={style.container}>
        <ScrollView style={{margin: 20}}>
          <Text style={style.title}>Formulario</Text>
          <Text style={style.text2}>Fecha de nacimiento:</Text>
          <TextInput
            style={style.input}
            placeholder="Fecha de nacimiento"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={e => onChange(e, 'nacimiento')}
            value={form.nacimiento}
          />
          <Text style={style.text2}>Lugar de nacimiento:</Text>
          <TextInput
            style={style.input}
            placeholder="Lugar de nacimiento"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={e => onChange(e, 'origen')}
            value={form.origen}
          />
          <Text style={style.text2}>Genero:</Text>
          <TextInput
            style={style.input}
            placeholder="Genero"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={e => onChange(e, 'genero')}
            value={form.genero}
          />
          <Text style={style.text2}>Emision:</Text>
          <TextInput
            style={style.input}
            placeholder="Emision"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={e => onChange(e, 'emision')}
            value={form.emision}
          />
          <Text style={style.text2}>Expiracion:</Text>
          <TextInput
            style={style.input}
            placeholder="Expiracion"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={e => onChange(e, 'expiracion')}
            value={form.expiracion}
          />
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={validate} style={styles.globalTouchable}>
              <Text style={style.text}>Insertar en la tabla</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  img: {
    resizeMode: 'contain',
    height: 200,
    marginTop: 50,
  },
  top: {
    marginTop: -100,
  },
  text: {
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  containerText: {
    margin: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ffff',
    borderRadius: 20,
    opacity: 0.8,
    margin: 10,
    color: '#fff',
    paddingLeft: 15,
  },
  text2: {
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    marginLeft: 10,
  },
});
