// @ts-ignore
import { Platform, Linking, NativeModules } from 'react-native';

const { SocialShare } = NativeModules;

export function isAppInstalled(appIdentifier: string): Promise<boolean> {
  if (Platform.OS === 'android') {
    return SocialShare.isAppInstalled(appIdentifier);
  } else {
    try {
      return Linking.canOpenURL(appIdentifier);
    } catch (error) {
      // @ts-ignore
      console.warn(error.message);
      return Promise.resolve(false);
    }
  }
  return Promise.resolve(false);
}

export function prepareAssetPath(assetPath: string) {
  if (Platform.OS === 'ios' && assetPath && assetPath.length >= 14 && assetPath.substring(0, 14) !== 'assets-library') {
    return `assets-library://asset/asset.mp4?id=${assetPath.split('/')[2]}&ext=mp4`;
  }
  return assetPath;
}
