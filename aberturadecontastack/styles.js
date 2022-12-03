import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center'
  },
  titulo: {
    fontSize: 30,
    color: '#2EBCD8',
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    top: 15
  },
  inputt: {
    borderWidth: 0,
    borderBottomWidth: 1,
    paddingVertical: 5,
    marginBottom: 10,
    fontSize: 15,
    width: '75%',
    marginLeft: 15
  },
  
  botao: {
    width: 300,
    padding: 10,
    backgroundColor: '#81ecec',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor:'#00cec9',
    marginVertical: 15
  },
  textobotao: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center'
  },
  res: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    color: '#1b41cc',
    width: '90%'
  },
  picker: {
    fontSize: 20,
    width: '70%',
    marginLeft: 15
  },
  rows: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    marginBottom: 5
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  slider: {
    width: '50%',
    marginLeft: 15
  },
  switchh: {
    marginLeft: 15
  },
  dados: {
    padding: 20
  },
  dadosItem: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 500
  }

});

export {styles}