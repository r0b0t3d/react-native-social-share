declare function shareLink(link: string, description: string): Promise<any>;
declare function shareVideo(localVideo: string): Promise<any>;
declare const _default: {
    shareLink: typeof shareLink;
    shareVideo: typeof shareVideo;
};
export default _default;
