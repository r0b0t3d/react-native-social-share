// @ts-ignore
import { NativeModules, Platform } from 'react-native';
// @ts-ignore
import ShareUtils, { SocialError } from '@react-native-social-share/utils';

const { TwitterShare } = NativeModules;

type ShareMediaOptions = {
  localFile: string;
  assetId?: string;
  album?: string;
  hashtag?: string;
  peopleIds?: string[];
};

const appIdentifier = Platform.select({
  android: 'com.twitter.android',
  ios: 'twitter://',
});

function shareLink(options: any) {
  return TwitterShare.shareLink(options.link, options.description);
}

async function sharePhoto(options: ShareMediaOptions) {
  if (Platform.OS === 'android') {
    const isAppInstalled = await ShareUtils.isAppInstalled(appIdentifier);
    if (!isAppInstalled) {
      throw new SocialError('APP_NOT_INSTALLED', 'Twitter must be installed');
    }
  }

  if (!options.assetId) {
    throw new SocialError('MISSING_PROPERTY', 'assetId is required');
  }
  const fileUri = await ShareUtils.uriForFile(options.assetId);
  return TwitterShare.sharePhoto(fileUri, options.hashtag);
}

async function shareVideo(options: ShareMediaOptions) {
  if (Platform.OS === 'android') {
    const isAppInstalled = await ShareUtils.isAppInstalled(appIdentifier);
    if (!isAppInstalled) {
      throw new SocialError('APP_NOT_INSTALLED', 'Twitter must be installed');
    }
  }

  if (!options.assetId) {
    throw new SocialError('MISSING_PROPERTY', 'assetId is required');
  }
  const fileUri = await ShareUtils.uriForFile(options.localFile);
  return TwitterShare.shareVideo(fileUri, options.hashtag);
}

export default {
  shareLink,
  sharePhoto,
  shareVideo,
};
