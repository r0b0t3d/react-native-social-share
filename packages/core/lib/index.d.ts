import { SocialProvider } from './types';
declare function shareLink(provider: SocialProvider, link: string, description: string): Promise<any>;
declare function shareVideo(provider: SocialProvider, localVideo: string): Promise<void>;
declare const _default: {
    shareLink: typeof shareLink;
    shareVideo: typeof shareVideo;
};
export default _default;
