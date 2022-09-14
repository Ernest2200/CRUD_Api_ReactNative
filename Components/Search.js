
//This is an example code to Add Search Bar Filter on Listview//
import React, { Component } from 'react';
import { Avatar, ListItem } from 'react-native-elements';
 
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  Alert,
  ScrollView
} from 'react-native';
//import all the components we are going to use.
 
export default class Search extends Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, text: '', refreshing: false };
    this.arrayholder = [];
  }


  componentDidMount() {
    return fetch('https://api-example-udb.herokuapp.com/api/list')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

   _onRefresh = () => {
    this.setState({refreshing: true});
    this.componentDidMount().then(() => {
      this.setState({refreshing: false});
    });
  }
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      text: text,
    });
  }
  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };
  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.container}>
  
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => this.SearchFilterFunction(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Buscar aqui"
        />
      
        <FlatList
          data={this.state.dataSource}
          onRefresh={() => this._onRefresh()}
    refreshing={this.state.refreshing}
          //ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={({ item }) => (
            <View style={styles.container}>
            <ListItem key={item} bottomDivider 
            
             >
                  <Avatar rounded source={{uri: item.image}}></Avatar>
                  <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                     <ListItem.Subtitle>{item.country}</ListItem.Subtitle>
                    <ListItem.Subtitle>{item.team}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>

              </View>
          )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />
    
      </View>
      
    );
    
  }
  
}
const styles = StyleSheet.create({
 
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
   container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 3,
  }
});