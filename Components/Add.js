import { Text, View, StyleSheet,TextInput,SafeAreaView,ScrollView } from 'react-native';
import {useState} from 'react'
import { Button } from 'react-native-elements';

export default function Add({navigation}) {

    const [id, onChangeId] = useState("");
    const [name, onChangeName] = useState("");
    const [team, onChangeTeam] = useState("");
    const [country, onChangeCountry] = useState("");
    const [image, onChangeImage] = useState("");
    
      return (
        <SafeAreaView>
        <ScrollView>
        <View style={styles.container} >
          <Text   style={styles.text} >Ingrese el id del estadio</Text>
          <TextInput 
          style={styles.input} 
          placeholder="Id"
          onChangeText={onChangeId}
          value={id}/>
          <Text  style={styles.text}>Ingrese el nombre del estadio</Text>
          <TextInput 
          style={styles.input} 
          placeholder="Nombre"
          onChangeText={onChangeName}
          value={name}/>
          <Text  style={styles.text}>Ingrese el equipo del estadio</Text>
          <TextInput 
          style={styles.input} 
          placeholder="Equipo"
          onChangeText={onChangeTeam}
          value={team}/>
          <Text  style={styles.text}>Ingrese la ciudad,pais del estadio</Text>
          <TextInput 
          style={styles.input} 
          placeholder="País"
          onChangeText={onChangeCountry}
          value={country}/>
          <Text  style={styles.text}>Ingrese la url de la imagen del estadio</Text>
          <TextInput 
          style={styles.input} 
          placeholder="Imagen"
          onChangeText={onChangeImage}
          value={image}/>

           <Button
                 title="Agregar Estadio"
              
              icon={{
                name: 'plus',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconContainerStyle={{ marginRight: 10 }}
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: '#1BDC2B',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                position: 'relative',
                alignItems: 'center',
justifyContent: 'center',
                width: 315
                
              }}
            onPress={
              () => {
if (!id.trim() || !name.trim() || !team.trim() || !country.trim() || !image.trim()) {
  alert('Por favor no dejar campos vacios');
  return;
}else{


                var url="https://api-example-udb.herokuapp.com/api/list";
                fetch(url,{
                    method: 'POST',headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                   },
                    body: JSON.stringify({
                      id: id,
                      name:name,
                      team:team,
                      country:country,
                      image:image
                      })//fin body
                    }).then((res)=>res.json()).then((resJson)=>alert("Para refrescar haz un scroll en la pantalla hacia abajo"+"\n"+resJson.message+"\n"+"Estadio Añadido Correctamente")).then(navigation.navigate("Inicio"))
    
                    
              }
            }
              }/>
            
              </View>
              </ScrollView>
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
       text: {
    color: "black",
    textDecorationColor: "yellow",
    textShadowColor: "black",
    textShadowRadius: 1,
    margin: 10,
     fontWeight: "bold",
    marginVertical: 4,
      },
      input: {
        margin:10,
      alignContent:'center',
     borderColor: "gray",
    width: "100%",
    borderWidth: 1.5,
    borderRadius: 8,
    padding: 15,
      },
      container: {
        padding:10,
      margin:25
      },
    });