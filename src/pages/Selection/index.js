import React, {useState}  from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {NavigationContainer} from '@react-navigation/native';

export default function Selection(){
    
  return (
    
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor="#05022E" barStyle="ligth-content"/>
    <ScrollView 
    showsVerticalScrollIndicator={true}
    overScrollMode={'auto'}>
   
        <View style={styles.text}>
            <Text style={styles.text}>Que tipo de trabalho você procura?</Text>
        </View>

        <View style={styles.containerImage}>
            <TouchableOpacity>
                <Image
                source={require('../../assets/eletricista.jpg')}
                style={styles.image}
                resizeMode='cover'
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                source={require('../../assets/montador.jpg')}
                style={styles.image}
                resizeMode='cover'
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                source={require('../../assets/faxineiro.jpg')}
                style={styles.image}
                resizeMode='cover'
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                source={require('../../assets/pintor.jpg')}
                style={styles.image}
                resizeMode='cover'
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                source={require('../../assets/pedreiro.jpg')}
                style={styles.image}
                resizeMode='cover'
                />
            </TouchableOpacity>
        </View>

    </ScrollView>

        <ScrollView
        scrollEnabled={false} 
        style={styles.scroll}>

            <View style={styles.containerButton}>
                <TouchableOpacity 
                style={styles.buttonConclude}
                onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonConcludeText}>Concluir</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>

    </SafeAreaView>
   
  );
}

const styles = StyleSheet. create({
    container:{
        flex:2,
        backgroundColor: "#05022E"
    },

    scroll:{
        alignContent: 'center',
    },

    containerButton:{
        flex:1,
        backgroundColor:"#05022E",
    },

    containerImage:{
        flexWrap:'wrap',
        flexDirection:'row',
        margin: 12,   
    },

    image:{
        width:120,
        height: 120,  
        borderWidth:1, 
        borderColor:'#d6e9ff',
        borderRadius:30,
        marginHorizontal: 24,
        marginTop: 20,
    },

    textImage:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#d6e9ff',
        marginTop: '2%',
        marginStart: 30,
    },

    text:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#d6e9ff',
        marginTop: '10%',
        marginBottom: '5%',
        paddingStart: '5%',
        paddingEnd:'5%',
    },

    buttonConclude:{
        backgroundColor:"#619dfd",
        width: '70%',
        alignSelf:'center',
        borderRadius: 50,
        paddingVertical: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:30,
        marginTop:10,
    },

    buttonConcludeText:{
        color: "#d6e9ff",
        fontSize: 18,
        fontWeight: 'bold',  
    },
});

