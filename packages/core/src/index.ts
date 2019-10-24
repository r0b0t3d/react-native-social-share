import { SocialProvider, SocialShare } from './types';

let Facebook: SocialShare | null;
let Twitter: SocialShare | null;

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
    return socialShare.shareVideo(localVideo);
  }
  return Promise.resolve();
}

export default {
  shareLink,
  shareVideo,
}
