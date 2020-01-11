import { SocialProvider, SocialShare, ShareMediaOptions, ShareLinkOptions } from './types';
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

function shareLink(provider: SocialProvider, options: ShareLinkOptions) {
  const socialShare = getSocialProvider(provider);
  if (socialShare) {
    return socialShare.shareLink(options);
  }
  return Promise.resolve();
}

function shareVideo(provider: SocialProvider, options: ShareMediaOptions): Promise<void> {
  const socialShare = getSocialProvider(provider);
  if (socialShare) {
    return socialShare.shareVideo({
      ...options,
      localFile: prepareAssetPath(options.localFile),
    });
  }
  return Promise.resolve();
}

function sharePhoto(provider: SocialProvider, options: ShareMediaOptions): Promise<void> {
  const socialShare = getSocialProvider(provider);
  if (socialShare) {
    return socialShare.sharePhoto(options);
  }
  return Promise.resolve();
}

export default {
  shareLink,
  shareVideo,
  sharePhoto,
};
