import { StyleSheet, Text, View } from 'react-native';
import Titulo from './Titulo';
import SearchBar from './SearchBar';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo texto="Título del componente" />
      <SearchBar placeholder="Buscar..." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
