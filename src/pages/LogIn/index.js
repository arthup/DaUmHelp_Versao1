import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../Services/firebaseConfig';
import { FontAwesome5 } from '@expo/vector-icons';


export default function LoginIn(){

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [passHide, setpassHide] = useState(true);
    
    
    const handleLogin = () =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('usuario logado')
            console.log(user)
            navigation.navigate('Screens')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        })
    }

    return(
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Faça Login!</Text>
                </Animatable.View>

                <Animatable.View animation="fadeInUp" style={styles.containerForm}>

                {error == true && email===""
                    ? <Text style={styles.warningMessage}>Campo Obrigatório*</Text>    
                    : <Text style={styles.warningMessage}/>
                }
                    <TextInput
                        placeholder='Email'
                        style={styles.input}
                        value={email}
                        onChangeText={(text) => setEmail(text) && (error == false && email ==="")}
                    />

                {error == true && password===""
                    ? <Text style={styles.warningMessage}>Campo Obrigatório*</Text>    
                    : <Text style={styles.warningMessage}/>
                }
                <View style={styles.inputIcon}>
                    <TextInput
                        placeholder='Senha'
                        style={styles.input}
                        value={password}
                        onChangeText={(text) => setPassword(text) && (error == false && password ==="")}
                        secureTextEntry={passHide}
                    ></TextInput>

                    <TouchableOpacity  onPress={() => setpassHide(!passHide)}>
                        <FontAwesome5 style={styles.icon} name={passHide ? 'eye' : 'eye-slash'} size={20} color="black"/>
                    </TouchableOpacity> 
                
                    </View>
                { email === "" || password === ""
                    ? 
                        <TouchableOpacity 
                        style={styles.buttonEnter}
                        onPress={() => setError(true)}
                        >
                            <Text style={styles.buttonEnterText}>Entrar</Text>
                        </TouchableOpacity>
                    :
                        <TouchableOpacity 
                        style={styles.buttonEnter}
                        onPress={handleLogin}
                        >
                            <Text style={styles.buttonEnterText}>Entrar</Text>
                        </TouchableOpacity>
                }
                    <TouchableOpacity 
                    style={styles.buttonRegister}
                    onPress={() => (navigation.navigate('SignIn'))}
                    >
                        <Text style={styles.buttonRegisterText}>Ainda não possui uma conta?</Text>
                    </TouchableOpacity>
                    
                </Animatable.View>
            </SafeAreaView>
        </TouchableWithoutFeedback> 
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

    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        borderWidth: 1,
    },

    input2:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        borderWidth: 1,
        position: 'absolute'
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
    },
    
    warningMessage:{
        color:"#f00a0a",
        fontSize:12,
        fontWeight:'bold',
    },

     inputIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        height: 40,

     },
     icon: {

    marginLeft:'80%',
    position:'relative'
    
     },
})