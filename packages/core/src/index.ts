import { SocialProvider, SocialShare } from './types';
import { prepareAssetPath } from './utils';

let Facebook: SocialShare | null;
let Twitter: SocialShare | null;
let Instagram: SocialShare | null;

function getSocialProvider(provider: SocialProvider): SocialShare | null {
  if (provider === 'facebook') {
    if (!Facebook) {
      // @ts-ignore
      Facebook = require('./facebook').default;
    }
    return Facebook;
  } else if (provider === 'twitter') {
    if (!Twitter) {
      // @ts-ignore
      Twitter = require('./twitter').default;
    }
    return Twitter;
  } else if (provider === 'instagram') {
    if (!Instagram) {
      // @ts-ignore
      Instagram = require('./instagram').default;
    }
    return Instagram;
  }
  return null;
}

function shareLink(provider: SocialProvider, link: string, description: string) {
  const socialShare = getSocialProvider(provider);
  if (socialShare) {
    return socialShare.shareLink(link, description);
  }
  return Promise.resolve();
}

function shareVideo(provider: SocialProvider, localVideo: string): Promise<void> {
  const socialShare = getSocialProvider(provider);
  if (socialShare) {
    return socialShare.shareVideo(prepareAssetPath(localVideo));
  }
  return Promise.resolve();
}

export default {
  shareLink,
  shareVideo,
};
