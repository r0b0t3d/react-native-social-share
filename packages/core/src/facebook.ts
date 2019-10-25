import { ShareVideoOptions } from "./types";

let FBSDK: any = null;
try {
  //@ts-ignore
  FBSDK = require('react-native-fbsdk');
} catch (error) {}
if (!FBSDK) {
  throw new Error('Your project need to install react-native-fbsdk');
}

async function shareLink(link: string, description: string) {
  const { ShareDialog } = FBSDK;
  const shareContent = {
    contentType: 'link',
    contentUrl: link,
    contentDescription: description,
  };
  return ShareDialog.show(shareContent);
}

async function shareVideo(options: ShareVideoOptions) {
  const { ShareDialog } = FBSDK;
  const shareContent = {
    contentType: 'video',
    video: { localUrl: options.assetId },
  };
  return ShareDialog.show(shareContent);
}

export default {
  shareLink,
  shareVideo,
};
