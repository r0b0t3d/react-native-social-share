// @ts-ignore
import { NativeModules, Linking, Platform } from 'react-native';

const { InstagramShare } = NativeModules;

function shareVideo(videoUri: string) {
  if (Platform.OS === 'ios') {
    return Linking.openURL(`instagram://library?AssetPath=${videoUri}`);
  } else if (Platform.OS === 'android') {
    return InstagramShare.shareVideo(videoUri);
  }
}

export default {
  shareVideo,
};
