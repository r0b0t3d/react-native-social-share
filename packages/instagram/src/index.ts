// @ts-ignore
import { NativeModules, Platform, Linking } from 'react-native';
import ShareUtils, { SocialError } from '@react-native-social-share/utils';
const { InstagramShare } = NativeModules;

const appIdentifier = Platform.select({
  android: 'com.instagram.android',
  ios: 'instagram://',
});

async function shareLink(link: string, description: string) {
  throw new Error('Not available');
}

async function shareVideo(options: any) {
  const isInstagramInstalled = await ShareUtils.isAppInstalled(appIdentifier);
  if (!isInstagramInstalled) {
    throw new SocialError('APP_NOT_INSTALLED', 'Instagram must be installed');
  }

  if (Platform.OS === 'ios') {
    return Linking.openURL(`instagram://library?AssetPath=${options.localFile}`);
  } else if (Platform.OS === 'android') {
    const fileUri = await ShareUtils.uriForFile(options.localFile);
    return InstagramShare.shareVideo(fileUri);
  }
}

async function sharePhoto(options: any) {
  const isInstagramInstalled = await ShareUtils.isAppInstalled(appIdentifier);
  if (!isInstagramInstalled) {
    throw new SocialError('APP_NOT_INSTALLED', 'Instagram must be installed');
  }

  if (Platform.OS === 'ios') {
    return Linking.openURL(`instagram://library?AssetPath=${options.localFile}`);
  } else if (Platform.OS === 'android') {
    const fileUri = await ShareUtils.uriForFile(options.localFile);
    return InstagramShare.sharePhoto(fileUri);
  }
}

export default {
  shareLink,
  shareVideo,
  sharePhoto,
};
