// @ts-ignore
import { NativeModules } from 'react-native';

const { TwitterShare } = NativeModules;

function shareLink(link: string, description: string) {
  return TwitterShare.shareLink(link, description);
}

function sharePhoto(photoUri: string, description?: string) {
  return TwitterShare.sharePhoto(photoUri, description);
}

export default {
  shareLink,
  sharePhoto,
};
