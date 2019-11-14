// @ts-ignore
import { NativeModules, Platform, Linking } from 'react-native';
import ShareUtils, { SocialError } from '@react-native-social-share/utils';
const { InstagramShare } = NativeModules;

async function shareLink(link: string, description: string) {
  throw new Error('Not available');
}

async function shareVideo(videoUri: string) {
  const appIdentifier = Platform.select({
    android: 'com.instagram.android',
    ios: 'instagram://',
  });
  const isInstagramInstalled = await ShareUtils.isAppInstalled(appIdentifier);
  if (!isInstagramInstalled) {
    throw new SocialError('APP_NOT_INSTALLED', 'Instagram must be installed');
  }

  if (Platform.OS === 'ios') {
    return Linking.openURL(`instagram://library?AssetPath=${videoUri}`);
  } else if (Platform.OS === 'android') {
    return InstagramShare.shareVideo(videoUri);
  }
}

export default {
  shareLink,
  shareVideo,
};
