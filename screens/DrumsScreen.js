import { View, Image, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { useAudioPlayer } from "expo-audio";

const tom1Source = require("../sounds/tom-1.mp3");
const tom2Source = require("../sounds/tom-2.mp3");
const tom3Source = require("../sounds/tom-3.mp3");
const tom4Source = require("../sounds/tom-4.mp3");
const snareSource = require("../sounds/snare.mp3");
const kickBassSource = require("../sounds/kick-bass.mp3");
const crashSource = require("../sounds/crash.mp3");

function DrumsScreen() {
  const tom1Player = useAudioPlayer(tom1Source);
  const tom2Player = useAudioPlayer(tom2Source);
  const tom3Player = useAudioPlayer(tom3Source);
  const tom4Player = useAudioPlayer(tom4Source);
  const snarePlayer = useAudioPlayer(snareSource);
  const kickBassPlayer = useAudioPlayer(kickBassSource);
  const crashPlayer = useAudioPlayer(crashSource);
  return (
    <SafeAreaView
      style={{ flex: 1, gap: 30, justifyContent: "center", marginBottom: 30 }}
    >
      <Text style={{ textAlign: "center", fontSize: 30, fontWeight: 700 }}>
        Drum Kits
      </Text>
      <Text style={{ textAlign: "center", fontSize: 20 }}>
        Press to make sound!
      </Text>
      <View style={styles.container}>
        <Button
          onPress={() => {
            tom1Player.seekTo(0);
            tom1Player.play();
          }}
        >
          <Image
            style={styles.image}
            source={require("../assets/images/tom1.png")}
          />
        </Button>
        <Button
          onPress={() => {
            tom2Player.seekTo(0);
            tom2Player.play();
          }}
        >
          <Image
            style={styles.image}
            source={require("../assets/images/tom2.png")}
          />
        </Button>
      </View>
      <View style={styles.container}>
        <Button
          onPress={() => {
            tom3Player.seekTo(0);
            tom3Player.play();
          }}
        >
          <Image
            style={styles.image}
            source={require("../assets/images/tom3.png")}
          />
        </Button>
        <Button
          onPress={() => {
            tom4Player.seekTo(0);
            tom4Player.play();
          }}
        >
          <Image
            style={styles.image}
            source={require("../assets/images/tom4.png")}
          />
        </Button>
      </View>

      <View style={styles.container}>
        <Button
          onPress={() => {
            snarePlayer.seekTo(0);
            snarePlayer.play();
          }}
        >
          <Image
            style={styles.image}
            source={require("../assets/images/snare.png")}
          />
        </Button>
        <Button
          onPress={() => {
            kickBassPlayer.seekTo(0);
            kickBassPlayer.play();
          }}
        >
          <Image
            style={styles.image}
            source={require("../assets/images/kick.png")}
          />
        </Button>
      </View>
      <View style={styles.container}>
        <Button
          onPress={() => {
            crashPlayer.seekTo(0);
            crashPlayer.play();
          }}
        >
          <Image
            style={styles.image}
            source={require("../assets/images/crash.png")}
          />
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default DrumsScreen;
