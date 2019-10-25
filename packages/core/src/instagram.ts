// @ts-ignore
import { Linking, Platform } from 'react-native';
import { isAppInstalled } from './utils';

let InstagramShare: any = null;
try {
  // @ts-ignore
  InstagramShare = require('@react-native-social-share/twitter').default;
} catch (error) {}
if (!InstagramShare) {
  throw new Error('Your project need to install @react-native-social-share/twitter');
}

async function shareLink(link: string, description: string) {
  throw new Error('Not available');
}

async function shareVideo(videoUri: string) {
  const appIdentifier = Platform.select({
    android: '',
    ios: 'instagram://',
  });
  const isInstagramInstalled = isAppInstalled(appIdentifier);
  if (!isInstagramInstalled) {
    throw new Error('Instagram must be installed');
  }

  return InstagramShare.shareVideo(videoUri);
}

export default {
  shareLink,
  shareVideo,
};
