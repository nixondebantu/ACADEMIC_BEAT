import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function CourseInfoCard(props) {
    const codes = props.code.split(" ");
  return (
    <TouchableOpacity style={styles.cardWrapper} >
        <View style={styles.leftside}>
            <Text style={[styles.leftTxt,{color:'#176AA8'}]}>{codes[0]}</Text>
            <Text style={[styles.leftTxt,{color:'#FD3400'}]}>{codes[1]}</Text>
        </View>
        <View style={styles.rightside}>
            <Text style={styles.titleTxt}>{props.title}</Text>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.creditTxt}>Credit: </Text>
                <Text style={[styles.creditTxt,{color:'#FD3400'}]}>{props.credit}</Text>
            </View>
        </View>
        
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    cardWrapper:{
        width:"100%",
        paddingHorizontal:15,
        paddingVertical:5,
        flexDirection:'row',
        backgroundColor:'#fff',
        borderRadius:10,
        shadowColor:'#000',
        elevation:10
    },
    leftside:{
        paddingHorizontal:5,
        justifyContent:'center',
        borderRightColor:'#176AA8',
        borderRightWidth:2
    },
    leftTxt:{
        fontWeight:'bold', 
        fontSize:25,
        textAlign:'center'
    },
    rightside:{
        paddingHorizontal:5
    },
    titleTxt:{
        fontSize:25
    },
    creditTxt:{
        fontSize:15
    }
});

export default CourseInfoCard;
