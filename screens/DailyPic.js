import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Linking,
  StatusBar,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import axios from "axios";

export default class DailyPic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: [],
    };
  }

  getAPOD = () => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=O6irsCQnxscBdKuWM2BplHt787QCy9OiPhjaDRsM"
      )
      .then((response) => {
        this.setState({ pic: response.data });
        console.log(response);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  componentDidMount() {
    this.getAPOD();
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground source={require('../assets/star-background.png')} style={styles.backgroundImage}>
          <Text style={styles.routeText}>Astronomy Picture of the Day</Text>
          <Text style={styles.titleText}>{this.state.pic.title}</Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(this.state.pic.url).catch((err) =>
                console.error("Couldn't load the page", err)
              );
            }}
          >
            <View style={styles.infocontainer}>
              <Image
                source={require("../assets/play-video.png")}
                style={{ width: 50, height: 50 }}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.explanationText}>
            {this.state.pic.explanation}
          </Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  backgroundImage: { flex: 1, resizeMode: "cover" },
  titleBar: { flex: 0.15, justifyContent: "center", alignItems: "center" },
  titleText: { fontSize: 40, fontWeight: "bold", color: "white" },
  routeText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
    marginTop: 75,
    paddingLeft: 30,
  },

  infocontainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },

  explanationText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  }
});

// api key: O6irsCQnxscBdKuWM2BplHt787QCy9OiPhjaDRsM
