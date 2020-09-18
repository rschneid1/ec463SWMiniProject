import React from 'react';
import { Button, SafeAreaView, StyleSheet } from 'react-native';


export default function StatisticsScreen( { navigation } ) {
  return (
    <SafeAreaView>
      <Button title="Go back" onPress={ ()=> { navigation.goBack() } } />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  
})