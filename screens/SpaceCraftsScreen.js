import axios from "axios";
import * as React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

export default class SpaceCraftsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aircrafts: [],
    }
  }

  getData = () => {
    axios.get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
      .then(response => {
        this.setState({
          aircrafts: response.data.results,
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.renderContainer}>
        <Image source={{uri: item.agency.image_url}} style={styles.image}></Image>

        <Text style={styles.sectionHeader}>{item.name}</Text>
        <Text style={{color: '#696969'}}>{item.agency.name}</Text>
        <Text>DESCRIPTION</Text>
        <Text style={styles.descriptionText}>{item.agency.description}</Text> 
      </View>
    )
  }

  keyExtractor = (item, index) => {
    index.toString();
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={{flex: 0.25}}>
          <Text>Spacecrafts</Text>
        </View>
        <View style={{flex: 0.75}}>
        <FlatList keyExtractor={this.keyExtractor} data={this.state.aircrafts} renderItem={this.renderItem}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  renderContainer: {
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    elevation: 10,
  },

  image: {
    width: "100%",
    height: 200,
    marginTop: 15,
    marginBottom: 15,
    marginRight: 10,
  },

  sectionHeader: {
    fontWeight: 'bold',
    fontSize: '20'
  },

  descriptionText: {
    color: '#A9A9A9',
    marginLeft: 10,
    marginRight: 10,
  }
});
