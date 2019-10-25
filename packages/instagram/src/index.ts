// @ts-ignore
import { NativeModules, Linking, Platform } from 'react-native';

const { Instagram } = NativeModules;


function shareVideo(videoUri: string) {
  if (Platform.OS === 'ios') {
    Linking.openURL(`instagram://library?AssetPath=${videoUri}`);
  }
}

export default {
  shareVideo,
};

