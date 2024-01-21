import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fontMedium, primaryColor, secondaryColor } from '../../constants';

function HomeOptionCard() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <Text style={styles.headerTxt}>Informations</Text>
        <View style={styles.iconWrapper}>
            <TouchableOpacity style={styles.iconItem} onPress={()=>navigation.navigate('Notice')}>
                <Image style={styles.icon} source={require('../../assets/icons/iconAnnoucement.png')}/>
                <Text style={styles.iconTxt}>Notice</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconItem} onPress={()=>navigation.navigate('Exam & HW')}>
                <Image style={styles.icon} source={require('../../assets/icons/iconExam.png')}/>
                <Text style={styles.iconTxt}>Exam & HW</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconItem} onPress={()=>navigation.navigate('Contact')}>
                <Image style={styles.icon} source={require('../../assets/icons/iconContact.png')}/>
                <Text style={styles.iconTxt}>Contacts</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        borderColor:primaryColor,
        borderWidth:1,
        padding:5,
        alignItems:'center',
        borderRadius:10,
    },
    headerTxt:{
        color:secondaryColor,
        fontWeight:'bold',
        fontSize:fontMedium,
        textDecorationLine:'underline',
    },
    icon:{
        width:50,
        height:50,
    },
    iconItem:{
        width:'30%',
        alignItems:'center'
    },
    iconWrapper:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:10
    }
});
export default HomeOptionCard;
