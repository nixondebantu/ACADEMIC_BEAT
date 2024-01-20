import React from 'react';
import { Alert, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fontMedium, fontSmall, primaryColor, secondaryColor, urlResourceForm } from '../../constants';

function CourseInfoCard(props) {
    const codes = props.code.split(" ");

    const goToLink = async (link) =>{
        const supported = await Linking.canOpenURL(link);

        if(supported) {
        await Linking.openURL(link);
        } else {
        Alert.alert("Can't open this URL");
        }
    };
    const pressed = () =>{
        if(props.url===undefined){
            Alert.alert("Not available now!","We don't have the resources of this course. To help us with your resources click \"Add\" button bellow",[
                {
                    text:'Add',
                    onPress:()=>goToLink(urlResourceForm)
                },
                {
                    text:'Ok'
                }
            ]);
        }
        else{
            goToLink(props.url);
        }
    }
  return (
    <TouchableOpacity style={styles.cardWrapper} onPress={pressed}>
        <View style={styles.leftside}>
            <Text style={[styles.leftTxt,{color:primaryColor}]}>{codes[0]}</Text>
            <Text style={[styles.leftTxt,{color:secondaryColor}]}>{codes[1]}</Text>
        </View>
        <View style={styles.rightside}>
            <Text style={styles.titleTxt}>{props.title}</Text>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.creditTxt}>Credit: </Text>
                <Text style={[styles.creditTxt,{color:secondaryColor,fontWeight:'bold'}]}>{props.credit}</Text>
            </View>
        </View>
        
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    cardWrapper:{
        width:"100%",
        paddingHorizontal:10,
        paddingVertical:5,
        marginBottom:15,
        flexDirection:'row',
        backgroundColor:'#fff',
        borderRadius:10,
        shadowColor:primaryColor,
        elevation:20,
        borderColor:primaryColor,
        borderWidth:1
    },
    leftside:{
        paddingRight:5,
        justifyContent:'center',
        borderRightColor:primaryColor,
        borderRightWidth:2,
        width:'20%'
    },
    leftTxt:{
        fontWeight:'bold', 
        fontSize:fontMedium,
        textAlign:'center'
    },
    rightside:{
        paddingLeft:5,
        width:'80%'
    },
    titleTxt:{
        fontSize:fontMedium,
    },
    creditTxt:{
        fontSize:fontSmall
    }
});

export default CourseInfoCard;
