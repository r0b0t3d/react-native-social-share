// @ts-ignore
import { Linking, Platform } from 'react-native';
import { ShareVideoOptions } from './types';
import { isAppInstalled } from './utils';

async function shareLink(link: string, description: string) {}

async function shareVideo(videoUri: string) {
  const appIdentifier = Platform.select({
    android: '',
    ios: 'instagram://'
  })
  const isInstagramInstalled = isAppInstalled(appIdentifier);
  if (!isInstagramInstalled) {
    throw new Error("Instagram must be installed");
  }
  
  Linking.openURL(`instagram://library?AssetPath=${videoUri}`);
}

export default {
  shareLink,
  shareVideo,
};
