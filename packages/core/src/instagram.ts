// @ts-ignore
import { Platform } from 'react-native';
import { isAppInstalled } from './utils';
import { SocialError } from './error';

let InstagramShare: any = null;
try {
  // @ts-ignore
  InstagramShare = require('@react-native-social-share/instagram').default;
} catch (error) {}
if (!InstagramShare) {
  throw new Error('Your project need to install @react-native-social-share/instagram');
}

async function shareLink(link: string, description: string) {
  throw new Error('Not available');
}

async function shareVideo(videoUri: string) {
  const appIdentifier = Platform.select({
    android: '',
    ios: 'instagram://',
  });
  const isInstagramInstalled = await isAppInstalled(appIdentifier);
  if (!isInstagramInstalled) {
    throw new SocialError('APP_NOT_INSTALLED', 'Instagram must be installed');
  }

  return InstagramShare.shareVideo(videoUri);
}

export default {
  shareLink,
  shareVideo,
};
