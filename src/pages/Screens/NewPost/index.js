import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import Textarea from 'react-native-textarea';

// import { Container } from './styles';

const NewPost = () => {
  return (
    
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#4FB9FF" barStyle="ligth-content"/>

      <View style={styles.header}> 
          <Text style={styles.headerText}>Criar Publicação</Text>
      </View>

      <View style={styles.body}>
          <Textarea
            containerStyle={styles.textareaContainer}
            style={styles.textarea}
            placeholder={'O que você está precisando...'}
            placeholderTextColor={'#A2ACC3'}
            underlineColorAndroid={'transparent'}
          />
        
      </View>
      
   </SafeAreaView>
  );
}

export default NewPost;

const styles = StyleSheet.create({
  header:{
    backgroundColor:'#4FB9FF',
    width: '100%',
    height: '30%',
    alignItems:'center',
    flexDirection:'row',
    flex:1
  },
  
  headerText:{
    color:'#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: "5%"
  },

  container:{
    backgroundColor: '#f0f8ff',
    width: '100%',
    height: '100%',
  },

  body:{
    flex: 5
  },
  
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    width:'95%',
    alignSelf: 'center',
    marginTop: 9
  },

  textarea: {
    textAlignVertical: 'top',  // hack android
    height: 170,
    fontSize: 14,
    color: 'black',
  },
  
  });