// @ts-ignore
import { Platform, Linking } from 'react-native';

export function isAppInstalled(appIdentifier: string) {
  if (Platform.OS === 'android') {

  } else {
    return Linking.canOpenURL(appIdentifier);
  }
}

export function prepareAssetPath(assetPath: string) {
  if (Platform.OS === 'ios' && assetPath && assetPath.length >= 14 && assetPath.substring(0, 14) !== 'assets-library') {
    return `assets-library://asset/asset.mp4?id=${assetPath.split('/')[2]}&ext=mp4`;
  }
  return assetPath;
}

