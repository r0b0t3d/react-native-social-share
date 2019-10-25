// @ts-ignore
import { NativeModules } from 'react-native';

const { TwitterShare } = NativeModules;

function shareLink(link: string, description: string) {
  return TwitterShare.shareLink(link, description);
}
export default {
  shareLink,
};
