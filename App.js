import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <View style={styles.contenedor}>
        <View style={styles.caja1}></View>
        <View style={styles.caja2}></View> 
        <View style={styles.caja3}></View> 
        <View style={styles.caja4}></View> 
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: 'cyan',
    flex: 1,
    // flexDirection: 'row',
    // alignItems: 'flex-start'
    justifyContent: 'center'
  },
  caja1: {
    padding:20,
    backgroundColor: '#A32446',
  },
  caja2: {
    padding:20,
    backgroundColor: '#A39624',
  },
  caja3: {
    padding:20,
    backgroundColor: '#762500',
  },
  caja4: {
    padding:20,
    backgroundColor: '#0B6A06',
  }
});
