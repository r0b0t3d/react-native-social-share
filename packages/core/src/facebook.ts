import { ShareMediaOptions, ShareLinkOptions } from './types';
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

async function shareLink(options: ShareLinkOptions) {
  const { ShareDialog } = FBSDK;
  const shareContent = {
    contentType: 'link',
    contentUrl: options.link,
    contentDescription: options.description,
    commonParameters: {
      peopleIds: options.peopleIds,
      hashtag: options.hashtag,
    },
  };
  return ShareDialog.show(shareContent);
}

async function shareVideo(options: ShareMediaOptions) {
  const { ShareDialog } = FBSDK;
  const shareContent = {
    contentType: 'video',
    video: { localUrl: options.localFile },
    commonParameters: {
      peopleIds: options.peopleIds,
      hashtag: options.hashtag,
    },
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

async function sharePhoto(options: ShareMediaOptions) {
  const { ShareDialog } = FBSDK;
  const shareContent = {
    contentType: 'photo',
    photos: [{ imageUrl: options.localFile, userGenerated: true }],
    commonParameters: {
      peopleIds: options.peopleIds,
      hashtag: options.hashtag,
    },
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
