import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// import { Container } from './styles';

const Checkbox = ({option = [], onChange}) => {
    const [selected, setSelected] = useState([]);
    function toggle(id){
        let index = selected.findIndex((i) =>i === id);
        let arrSelecteds = [...selected];
        if (index !== -1){
            arrSelecteds.splice(index, 1);
        }else{
            arrSelecteds.push(id);
        }
        setSelected(arrSelecteds);
    }
  return (
    <View style={styles.container}>
    {option.map((op, index) =>(
        <View style={styles.optionContainer}>
            <TouchableOpacity style={styles.buttonCheck} onPress={()=> toggle(op?.id)}>

                {
                    selected.findIndex(i => i === op.id) !== -1 ?  <Image
                    source={require('../../assets/teste.png')}
                    style={{ width:'50%', borderColor:"red", borderWidth:5}}
                    resizeMode='contain'
                />:  <Image
                source={require('../../assets/teste.png')}
                style={{ width:'90%'}}
                resizeMode='contain'
            />
                }
               
            </TouchableOpacity>
            <Text style={styles.optionText}>{op?.text}</Text>
        </View>
       
    ))}
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        marginLeft: 12,
    },

    optionContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        height:"50%"

    },
    optionText:{
        marginLeft: 12,
        color: "white",
        fontSize: 16,
        fontWeight: '600' 
    },

    buttonCheck:{
        height: 50,
        width: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'green'
    }
});

export default Checkbox;