export interface SocialShare {
  shareLink(link: string, description: string): Promise<any>;
  shareVideo(localVideo: string): Promise<any>;
}

export type SocialProvider = 'facebook' | 'twitter' | 'instagram';

