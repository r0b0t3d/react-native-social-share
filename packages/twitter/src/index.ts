// @ts-ignore
import { NativeModules } from 'react-native';

const { TwitterShare } = NativeModules;

type ShareMediaOptions = {
  localFile: string;
  assetId?: string;
  album?: string;
  hashtag?: string;
  peopleIds?: string[];
};

function shareLink(link: string, description: string) {
  return TwitterShare.shareLink(link, description);
}

function sharePhoto(options: ShareMediaOptions) {
  return TwitterShare.sharePhoto(options.localFile, options.hashtag);
}

export default {
  shareLink,
  sharePhoto,
};
