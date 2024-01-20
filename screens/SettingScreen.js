import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function SettingScreen() {
  return (
    <View style={styles.container}>
        <Text>Settings</Text>
    </View>
  );
}

const styles= StyleSheet.create({
  container:{
    padding:10
  }
});

export default SettingScreen;
