import React from 'react';
import { TextInput, View, Button } from 'react-native';

const SearchBar = ({ placeholder }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#eee', padding: 10, borderRadius: 5 }}>
      <TextInput
        style={{ flex: 1, height: 40, borderWidth: 1, paddingHorizontal: 10 }}
        placeholder={placeholder}
      />
      <Button title="Buscar" onPress={() => {}} />
    </View>
  );
};

export default SearchBar;
