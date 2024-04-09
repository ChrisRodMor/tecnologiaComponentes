import React from 'react';
import { Text } from 'react-native';

const Titulo = ({ texto }) => {
  return <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{texto}</Text>;
};

export default Titulo;
