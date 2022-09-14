import { Text, View, StyleSheet,TextInput,SafeAreaView,ScrollView } from 'react-native';
import {useState} from 'react'
import { Button } from 'react-native-elements';


export default function Add({navigation,route}) {
    const {stadium}=route.params;

  
  
const [data, setData] = useState({
    id: stadium.id,
    name: stadium.name,
    team:stadium.team,
    country:stadium.country,
    image:stadium.image
  });

   const onChangeId = (value) => {
    setData({ ...data, id: value });
  };
  const onChangeName = (value) => {
    setData({ ...data, name: value });
  };
 
  const onChangeTeam = (value) => {
    setData({ ...data, team: value });
  };
  
   const onChangeCountry = (value) => {
    setData({ ...data, country: value });
  };

    const onChangeImage = (value) => {
    setData({ ...data, image: value });
  };
  
    
      return (
        <SafeAreaView>
        <ScrollView>
        <View style={styles.container} >
          <Text style={styles.text}>Ingrese el id del estadio</Text>
          <TextInput 
          style={styles.input} 
          placeholder="id"
          
          onChangeText={onChangeId}
          value={data.id}/>
          <Text style={styles.text}>Ingrese el nombre del estadio</Text>
          <TextInput 
          style={styles.input} 
          placeholder="name"
         onChangeText={(value) => onChangeName(value)}
          value={data.name}/>
          <Text style={styles.text}>Ingrese el equipo del estadio</Text>
          <TextInput 
          style={styles.input} 
          placeholder="team"
          onChangeText={onChangeTeam}
          value={data.team}/>
          <Text style={styles.text}>Ingrese la ciudad,pais del estadio</Text>
          <TextInput 
          style={styles.input} 
          placeholder="country"
          onChangeText={onChangeCountry}
          value={data.country}/>
          <Text style={styles.text}>Ingrese la url de la imagen del estadio</Text>
          <TextInput 
          style={styles.input} 
          placeholder="image"
          onChangeText={onChangeImage}
          value={data.image}/>
    


           <Button
            title="Actualizar Estadio"
              
              icon={{
                name: 'update',
                type: 'MaterialIcons',
                size: 15,
                color: 'white',
              }}
              iconContainerStyle={{ marginRight: 10 }}
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: '#F3A712',
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
                var url="https://api-example-udb.herokuapp.com/api/list/"+ stadium.id;
                fetch(url,{
                    method: 'PUT',headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                   },
                    body: JSON.stringify({
                      id: data.id,
                      name:data.name,
                      team:data.team,
                      country:data.country,
                      image:data.image
                      })//fin body
                    }).then((res)=>res.json()).then((resJson)=>alert("Para refrescar haz un scroll en la pantalla hacia abajo"+"\n"+resJson.message+"\n"+"Estadio Actualizado Correctamente")).then(navigation.navigate("Inicio"))
    
                    
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