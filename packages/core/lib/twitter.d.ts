declare function shareLink(link: string, description: string): any;
declare function shareVideo(localVideo: string): Promise<void>;
declare const _default: {
    shareLink: typeof shareLink;
    shareVideo: typeof shareVideo;
};
export default _default;
