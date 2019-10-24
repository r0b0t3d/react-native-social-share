// @ts-ignore
const TwitterShare = require('@react-native-social-share/twitter');
if (!TwitterShare) {
  throw new Error('Your project need to install @react-native-social-share/twitter');
}

function shareLink(link: string, description: string) {
	return TwitterShare.shareLink(link, description);
}

async function shareVideo(localVideo: string) {
  throw new Error('Not available');
}

export default {
  shareLink,
  shareVideo,
};
