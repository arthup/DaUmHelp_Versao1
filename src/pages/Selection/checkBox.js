import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cheackbox from '../../Components/Cheackbox';
// import { Container } from './styles';




const CheackboxPage = () => {
    const option = [{text: "Li e concordo"}, id=1];
  return (
    <View>
        <Text>Selecione</Text>
        <Cheackbox option={option} onChange={(op) => alert(op)} />
    </View>
  );
}

export default CheackboxPage;