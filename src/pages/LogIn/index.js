import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';


export default function SignIn(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}>Faça Login!</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>

                <TextInput
                    placeholder='Email'
                    style={styles.inputEmail}
                />

                <TextInput
                    placeholder='Senha'
                    style={styles.inputPassword}
                />

                <TouchableOpacity 
                style={styles.buttonEnter}
                onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.buttonEnterText}>Entrar</Text>
                </TouchableOpacity>

                
                <TouchableOpacity 
                style={styles.buttonRegister}
                onPress={() => navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonRegisterText}>Ainda não possui uma conta?</Text>
                </TouchableOpacity>
            </Animatable.View>



        </View>
    )
};
 
const styles = StyleSheet.create({
    container:{
        flex:2,
        backgroundColor:"#619dfd"
    },

    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },

    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#d6e9ff',
    },

    containerForm:{
        backgroundColor:"#d6e9ff",
        flex:1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },

    inputEmail:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        marginTop:'10%'
    },

    inputPassword:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },

    buttonEnter:{
        backgroundColor:"#619dfd",
        width: '80%',
        alignSelf:'center',
        borderRadius: 50,
        paddingVertical: 14,
        justifyContent: 'center',
        alignItems: 'center',
        bottom:'-58%'
    },

    buttonEnterText:{
        color: "#d6e9ff",
        fontSize: 15,
        fontWeight: 'bold',  
    },

    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center',
        bottom:'-58%'
    },

    buttonRegisterText:{
    color: "#A2ACC3",
    fontSize: 15,
    fontWeight: 'bold',
    }
})