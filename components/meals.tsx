import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Reff from './Reff';

export default function Meals() {
    const Separator = () => <View style={styles.separator} />;

    return (
        <View style={styles.background}>
            <Text style={styles.title}>Refeições</Text>
            <Text style={styles.title}>Editar</Text>
            <Separator />
            <Reff time="6:00" title="Café da Manhã"></Reff>
            <Separator />
            <Reff time="6:00" title="Lanche da Manhã"></Reff>
            <Separator />
            <Reff time="6:00" title="Almoço"></Reff>
        </View>
    )
}

const styles = StyleSheet.create({
  title: {
    color: "#4B4B4B",
    fontSize: 16,
},
  background: {
    backgroundColor: "#D9D9D9",
    // paddingTop: 50,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})