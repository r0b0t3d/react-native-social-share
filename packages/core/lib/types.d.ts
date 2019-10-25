export declare type ShareVideoOptions = {
    localFile?: string;
    assetId?: string;
    album?: string;
};
export interface SocialShare {
    shareLink(link: string, description: string): Promise<any>;
    shareVideo(videoUri: string): Promise<any>;
}
export declare type SocialProvider = 'facebook' | 'twitter' | 'instagram';
