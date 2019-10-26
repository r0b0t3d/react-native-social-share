// @ts-ignore
import { NativeModules, Platform, Linking } from 'react-native';

const { ShareUtils } = NativeModules;

function isAppInstalled(appIdentifier: string): Promise<boolean> {
  if (Platform.OS === 'android') {
    return ShareUtils.isAppInstalled(appIdentifier);
  } else {
    try {
      return Linking.canOpenURL(appIdentifier);
    } catch (error) {
      // @ts-ignore
      console.warn(error.message);
      return Promise.resolve(false);
    }
  }
}

function prepareAssetPath(assetPath: string) {
  if (Platform.OS === 'ios' && assetPath && assetPath.length >= 14 && assetPath.substring(0, 14) !== 'assets-library') {
    return `assets-library://asset/asset.mp4?id=${assetPath.split('/')[2]}&ext=mp4`;
  }
  return assetPath;
}

export default {
  isAppInstalled,
  prepareAssetPath,
};

export * from './error';
