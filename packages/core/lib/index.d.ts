export declare type SocialProvider = 'facebook' | 'twitter' | 'instagram';
declare function shareLink(provider: SocialProvider, link: string, description: string): void;
declare function shareVideo(provider: SocialProvider, localVideo: string): Promise<void>;
declare const _default: {
    shareLink: typeof shareLink;
    shareVideo: typeof shareVideo;
};
export default _default;
