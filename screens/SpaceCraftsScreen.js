import axios from 'axios'
import * as React from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'

export default class SpaceCraftsScreen extends React.Component{

    constructor() {
        super()
        this.state = {
            data: {},
        }
    }

    getData = () => {
       axios.get('https://ll.thespacedevs.com/2.0.0/config/spacecraft/')
       .then(response => {
           this.setState({
               data: response.data.results
           });

           console.log(response.data.results);
       })
       .catch(error => {
           console.log(error);
       });
    }

    keyExtractor = (item, index) => index.toString();


    renderItem = ({item}) => {
        return (
            <View style={{
                borderWidth: 1, justifyContent: 'center', alignItems: 'center', alignItems: 'center', marginBottom: 10, elevation: 10,
            }}>
                <Image source={{uri: item.agency.image_url}} style={{width: "100%", height: 200, marginTop: 15, marginBottom: 15, marginRight: 10,}}/>
                <Text style={{fontWeight: 'bold', fontSize: 20,}}>{item.name}</Text>
                <Text style={{color: '#696969'}}>{item.agency.name}</Text>
                <Text>Description</Text>
                <Text style={{color: 'A9A9A9', marginLeft: 10, marginRight: 10,}}>{item.agency.description}</Text>
            </View>
        )
    }


    render(){
      return(
          <View style={styles.container}>
              <View style={{flex: 0.25}}>
              <Text>SpaceCrafts</Text>
              </View>

              <View>
                  <FlatList keyExtractor={this.keyExtractor} data={this.state.data} renderItem={this.renderItem}/>
              </View>
          </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})