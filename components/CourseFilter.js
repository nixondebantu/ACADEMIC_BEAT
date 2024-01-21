import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fontSmall } from '../constants';

function CourseFilter() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Select Semester</Text>
    </View>
  );
}
const styles= StyleSheet.create({
  container:{
    padding:10,
  },
  txt:{
    fontSize:fontSmall,
  }
});

export default CourseFilter;
