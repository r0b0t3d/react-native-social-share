declare function shareLink(link: string, description: string): Promise<void>;
declare function shareVideo(videoUri: string): Promise<void>;
declare const _default: {
    shareLink: typeof shareLink;
    shareVideo: typeof shareVideo;
};
export default _default;
