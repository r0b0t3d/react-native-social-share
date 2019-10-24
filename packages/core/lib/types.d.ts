export interface SocialShare {
    shareLink(link: string, description: string): Promise<any>;
    shareVideo(localVideo: string): Promise<any>;
}
export declare type SocialProvider = 'facebook' | 'twitter' | 'instagram';
