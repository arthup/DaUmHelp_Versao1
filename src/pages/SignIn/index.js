import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';


export default function SignIn(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}>Crie sua conta!</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <TextInput
                    placeholder='Nome Completo '
                    style={styles.inputName}
                />

                <TextInput
                    placeholder='Email'
                    style={styles.input}
                />

                <TextInput
                    placeholder='Senha'
                    style={styles.input}
                />

                <TextInput
                    placeholder='Confirmar Senha'
                    style={styles.input}
                />

                <TouchableOpacity 
                style={styles.buttonRegister}
                onPress={() => navigation.navigate('Selection')}
                >
                    <Text style={styles.buttonRegisterText}>Cadastrar</Text>
                </TouchableOpacity>

                
                <TouchableOpacity 
                style={styles.buttonLogin}
                onPress={() => navigation.navigate('LogIn')}
                >
                    <Text style={styles.buttonLoginText}>Já tenho uma conta</Text>
                </TouchableOpacity>

            </Animatable.View>



        </View>
    )
};
 
const styles = StyleSheet.create({
    container:{
        flex:1,
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

    inputName:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        marginTop:'8%'
    },

    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },

    buttonRegister:{
        backgroundColor:"#619dfd",
        width: '80%',
        alignSelf:'center',
        borderRadius: 50,
        paddingVertical: 14,
        justifyContent: 'center',
        alignItems: 'center',
        bottom:'-42%'
    },

    buttonRegisterText:{
        color: "#d6e9ff",
        fontSize: 15,
        fontWeight: 'bold',  
    },

    buttonLogin:{
        marginTop: 14,
        alignSelf: 'center',
        bottom:'-42%'
    },

    buttonLoginText:{
    color: "#A2ACC3",
    fontSize: 15,
    fontWeight: 'bold',
    }
})