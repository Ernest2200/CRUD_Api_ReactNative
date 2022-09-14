import { StyleSheet, View, SafeAreaView, ScrollView, Text,Image } from 'react-native';
import React,{useState,useEffect} from 'react'
import { Avatar, ListItem,Button } from 'react-native-elements';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Details({navigation,route}) {
  
  const {stadium}=route.params;
  
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.containerView}>
    <Image source={{uri: stadium.image}} style={styles.imagen2}></Image>
    
    <View style={styles.containerCard}>
      <Text style={{fontSize: 20, textAlign: 'center',padding:12, fontWeight: 'bold'}}>Datos del Estadio</Text>
        <Card style={{ borderRadius: 15,  margin:5 }}
        >
        <View style={{justifyContent: 'center', height: 60}}>
          <View style={{display: "flex", flexDirection: "row", alignItems: 'center'}}>
            <Text style={{fontSize: 18, textAlign: 'center',padding:10, fontWeight: 'bold'}}>{stadium.name}</Text>
           
<Icon name="stadium-variant" size={30} style={{padding:15}} />
          </View>
        </View>

        </Card>

        <Card style={{ borderRadius: 15,  margin:5 }}
        >
        <View style={{justifyContent: 'center', height: 60}}>
          <View style={{display: "flex", flexDirection: "row", alignItems: 'center'}}>
            <Text style={{fontSize: 18, textAlign: 'center',padding:10, fontWeight: 'bold'}}>{stadium.team}</Text>
           
<Icon name="account-supervisor" size={30} style={{padding:15}} />
          </View>
        </View>

        </Card>
        


        <Card style={{ borderRadius: 15,  margin:5 }}
        >
        <View style={{justifyContent: 'center', height: 60}}>
          <View style={{display: "flex", flexDirection: "row", alignItems: 'center'}}>
            <Text style={{fontSize: 19, textAlign: 'center',padding:12, fontWeight: 'bold'}}>{stadium.country}</Text>
           
<Icon name="flag-variant" size={30} style={{padding:15}} />
          </View>
        </View>

        </Card>
  </View>







    <Button
              title="Eliminar"
              
              icon={{
                name: 'trash',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconContainerStyle={{ marginRight: 10 }}
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: 'red',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              onPress={()=>{
                var url="https://api-example-udb.herokuapp.com/api/list/"+ stadium.id;
        
              
        fetch(url,{
                        method: 'DELETE',
                        }).then((res)=>res.json()).then((resJson)=>alert("Para refrescar haz un scroll en la pantalla hacia abajo"+"\n"+resJson.message+"\n"+"Estadio Eliminado")).then(navigation.navigate('Inicio'))
              
    alert(url);
              }}/>

<Button
              title="Actualizar"
              
              icon={{
                name: 'update',
                type: 'MaterialCommunityIcons',
                size: 15,
                color: 'white',
              }}
              iconContainerStyle={{ marginRight: 10 }}
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: '#0B3954',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              onPress={()=>{
             navigation.navigate('Actualizar',{stadium:stadium})
        
             
              }}/>
     
</View>
</ScrollView>   
         </SafeAreaView>

  );
}

const styles = StyleSheet.create({
    imagen2:{
    height:350,
    width:'100%',
    
  },
  text:{
    fontSize:26,
    fontStyle:'bold',
    
  },
    text2:{
    fontSize:18,
    color:'grey',
    margin:10,
    
  },
  containerCard: {
    width:'100%',
    padding: 20,
    backgroundColor: 'transparent',
  },
  containerView: {
    alignItems:'center'
  },
});