import { SocialShare } from "./types";

let TwitterShare: any = null;
try {
	// @ts-ignore
	TwitterShare = require('@react-native-social-share/twitter').default;
} catch (error) {}
if (!TwitterShare) {
	throw new Error('Your project need to install @react-native-social-share/twitter');
}

class TwitterSocialShare implements SocialShare {
	shareLink(link: string, description: string) {
		return TwitterShare.shareLink(link, description);
	}
	
	async shareVideo(localVideo: string) {
		throw new Error('Not available');
	}
}

export default new TwitterSocialShare();
