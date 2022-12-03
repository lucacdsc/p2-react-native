import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Switch,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status1: false,
      status2: false,
    };
  }

  // Quando o componente é montado em tela (quando abrimos o App)
  async componentDidMount() {
    await AsyncStorage.getItem('status1').then((value) => {
      this.setState({ status1: value });
    });
    await AsyncStorage.getItem('status2').then((value) => {
      this.setState({ status2: value });
    });
  }

  // Toda vez que um state é atualizado
  async componentDidUpdate(_, prevState) {
    const status1 = this.state.status1;
    const status2 = this.state.status2;

    if (prevState !== frase) {
      await AsyncStorage.setItem('status1', status1);
      await AsyncStorage.setItem('status2', status2);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            width: '90%',
            textAlign: 'center',
            paddingBottom: 10,
            borderBottomWidth: 1,
            fontSize: 25,
            fontWeight: 600,
          }}>
          Frases
        </Text>

        <View
          style={{
            width: '95%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Switch
            value={this.state.status1}
            onValueChange={(valorSwitch) =>
              this.setState({ status1: valorSwitch })
            }
          />

          <Text style={{ textAlign: 'center', fontSize: 30 }}>
            {this.state.status1 ? 'Grande' : 'Pequeno'}
          </Text>

          <Switch
            value={this.state.status2}
            onValueChange={(valorSwitch) =>
              this.setState({ status2: valorSwitch })
            }
          />

          <Text style={{ textAlign: 'center', fontSize: 30 }}>
            {this.state.status2 ? 'Noite' : 'Dia'}
          </Text>
        </View>

        <View
          
          style={ this.state.status2 ? styles.darkMode : styles.lightMode } >
          <Text style={ this.state.status1 ? styles.grande : styles.pequeno }>"A vingança nunca é plena, mata a alma e envenena" (Seu Madruga)</Text>
        </View>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  pequeno: {
    fontSize: 13,
  },
  grande: {
    fontSize: 23
  },
  darkMode: {
    margin: 10,
    padding: 10,
    backgroundColor: "#8c8c8c",
  },
  lightMode: {
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
  }
});
