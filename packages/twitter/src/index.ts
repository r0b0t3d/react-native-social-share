// @ts-ignore
import { NativeModules } from 'react-native';

const { Twitter } = NativeModules;

function shareLink(link: string, description: string) {
  Twitter.shareLink({ link, description });

}
export default {
  shareLink
};
