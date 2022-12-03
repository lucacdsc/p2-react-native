import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

import api from './src/services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cepp: [],
      cepatual: '',
    };
  }

  render() {
    const { cep, logradouro, bairro, localidade, uf } = this.state.cepp;

    return (
      <View style={styles.container}>
        <Text style={styles.titleApp}>CEP x Endereço</Text>

        <View
          style={{
            flexDirection: 'row',
            margin: 20,
            justifyContent: 'space-around',
          }}>
          <TextInput
            style={styles.input}
            placeholder="Digite o CEP"
            onChangeText={(valor) => this.setState({ cepatual: valor })}
          />
          <TouchableOpacity
            style={{ padding: 5, backgroundColor: '#2be067', borderRadius: 5 }}
            onPress={async () => {
              if (this.state.cepatual != '') {
                const response = await api.get(this.state.cepatual + '/json');
                this.setState({
                  cepp: response.data,
                });
              }
            }}>
            <Entypo name="check" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{ margin: 20 }}>
          <Text>CEP: {cep}</Text>
          <Text>Logradouro: {logradouro}</Text>
          <Text>Bairro: {bairro}</Text>
          <Text>Cidade: {localidade}</Text>
          <Text>Estado: {uf}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleApp: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 22,
    fontWeight: 600,
  },
  input: {
    padding: 10,
    borderWidth: 1,
  },
});

export default App;
