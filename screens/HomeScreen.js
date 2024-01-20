import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeOptionCard from '../components/Card/HomeOptionCard';

function HomeScreen() {
  return (
    <View style={styles.container}>
        <HomeOptionCard/>
    </View>
  );
}
const styles= StyleSheet.create({
  container:{
    padding:10
  }
});

export default HomeScreen;
