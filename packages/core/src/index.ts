import Facebook from './facebook';
import Twitter from './twitter';

export type SocialProvider = 'facebook' | 'twitter' | 'instagram';

function shareLink(provider: SocialProvider, link: string, description: string) {
  if (provider === 'facebook') {
    Facebook.shareLink(link, description);
  } else if (provider === 'twitter') {
    Twitter.shareLink(link, description);
  }
}

function shareVideo(provider: SocialProvider, localVideo: string): Promise<void> {
  if (provider === 'facebook') {
    return Facebook.shareVideo(localVideo);
  }
  return Promise.resolve();
}

export default {
  shareLink,
  shareVideo,
}
