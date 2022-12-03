import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 15,
  },
  titulo: {
    fontSize: 20,
    color: '#2EBCD8',
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  linha: {
    width: '50%',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 20
  },

});

export {styles}