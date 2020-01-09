import { ShareMediaOptions } from './types';
// @ts-ignore
import { Platform } from 'react-native';
// @ts-ignore
import ShareUtils, { SocialError } from '@react-native-social-share/utils';

let FBSDK: any = null;
try {
  //@ts-ignore
  FBSDK = require('react-native-fbsdk');
} catch (error) {}
if (!FBSDK) {
  throw new Error('Your project need to install react-native-fbsdk');
}

const appIdentifier = Platform.select({
  android: 'com.facebook.katana',
  ios: 'fbauth2://',
});

async function shareLink(link: string, description: string) {
  const { ShareDialog } = FBSDK;
  const shareContent = {
    contentType: 'link',
    contentUrl: link,
    contentDescription: description,
  };
  return ShareDialog.show(shareContent);
}

async function shareVideo(options: ShareMediaOptions) {
  const { ShareDialog } = FBSDK;
  const shareContent = {
    contentType: 'video',
    video: { localUrl: options.assetId },
  };
  return ShareDialog.show(shareContent);
}

async function sharePhoto(contentUrl: string, description?: string) {
  const { ShareDialog } = FBSDK;
  const shareContent = {
    contentType: 'photo',
    photos: [{ imageUrl: contentUrl, userGenerated: true }],
  };
  ShareDialog.setMode('native');
  const isAppInstalled = await ShareUtils.isAppInstalled(appIdentifier);
  if (!isAppInstalled) {
    throw new SocialError('APP_NOT_INSTALLED', 'Facebook app must be installed');
  }
  if (ShareDialog.canShow(shareContent)) {
    return ShareDialog.show(shareContent);
  }
  throw new Error('Failed');
}

export default {
  shareLink,
  shareVideo,
  sharePhoto,
};
