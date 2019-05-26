//import AudioRecorderPlayer from "react-native-audio-recorder-player";
import SoundPlayer from "react-native-sound-player";

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

  get refAudio() {
    return this.referenceAudio;
  }

  set refAudio(referenceAudio) {
    this.referenceAudio = referenceAudio;
  }
}
