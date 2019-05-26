//import AudioRecorderPlayer from "react-native-audio-recorder-player";
import { Alert } from "react-native";

import SoundPlayer from "react-native-sound-player";
import SoundRecorder from "react-native-sound-recorder";

export default class PlayerAndRecorder {
  constructor(referenceAudio) {
    this.referenceAudio = referenceAudio;
  }

  startPlay() {
    try {
      // or play from url
      SoundPlayer.playUrl(this.referenceAudio);
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  }

  startRecord() {
    SoundRecorder.start(SoundRecorder.PATH_CACHE + "/test.mp4").then(
      function() {
        console.log("started recording");
      }
    );
  }

  stopRecord() {
    SoundRecorder.stop().then(function(result) {
      console.log("stopped recording, audio file saved at: " + result.path);
      Alert.alert("file://" + result.path);
      try {
        // or play from url
        SoundPlayer.playUrl("file://" + result.path);
      } catch (e) {
        console.log(`cannot play the sound file`, e);
      }
    });
  }

  get refAudio() {
    return this.referenceAudio;
  }

  set refAudio(referenceAudio) {
    this.referenceAudio = referenceAudio;
  }
}
