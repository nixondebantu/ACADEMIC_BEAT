import React from 'react';
import { StyleSheet, View } from 'react-native';
import CourseInfo from '../components/CourseInfo';

function ResourcesScreen() {
  return (
    <View style={styles.container}>
        <CourseInfo/>
    </View>
  );
}

const styles= StyleSheet.create({
  container:{
    padding:10
  }
});

export default ResourcesScreen;
