/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert
} from "react-native";

import PlayerAndRecorder from "./playerAndRecorder";
import RNFS from "react-native-fs";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    //let uri = require("./snd/or105.wav");
    this.playerRecorder = new PlayerAndRecorder(
      "file://" + RNFS.MainBundlePath + "/or105.wav"
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> ITU-T P.862 PESQ MOS </Text>
        <Image
          source={require("./img/mos.jpg")}
          style={{ width: 350, height: 350 }}
          resizeMode="contain"
        />
        <Text style={styles.textAuthor}> Result: MOS Score</Text>
        <Button
          onPress={() => {
            this.playerRecorder.startPlay();
            Alert.alert("file://" + RNFS.MainBundlePath);
          }}
          title="Start"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  textAuthor: {
    textAlign: "right",
    color: "#333333",
    marginBottom: 5
  }
});
