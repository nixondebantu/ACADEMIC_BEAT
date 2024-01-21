import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { fontMedium, primaryColor, urlResourceFirebase } from '../constants';
import CourseInfoCard from './Card/CourseInfoCard';

function CourseInfo() {
  const [courseData,setCourseData] = useState([]);
  useEffect(()=>{
    getAPIData();
  },[]);
  const getAPIData = async ()=>{
    let fetchData = await fetch(urlResourceFirebase);
    fetchData = await fetchData.json();
    setCourseData(Object.values(fetchData));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headingTxt}>Course Resources</Text>
      <ScrollView style={styles.infoContainer}>
      {courseData.length ?
        courseData.map((item, index)=><View key={index}>
          <CourseInfoCard title={item['course title']} code={item['course code']} credit={item.credit} url={item.url}/>
          </View>)
      :null
    }
    </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  infoContainer:{
    paddingBottom:23
  },
  headingTxt:{
    fontSize:fontMedium,
    color:primaryColor,
    fontWeight:'bold',
    textDecorationLine:'underline',
  },
  container:{
  }
});

export default CourseInfo;
