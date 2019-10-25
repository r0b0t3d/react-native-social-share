export type ShareVideoOptions = {
  localFile?: string;
  assetId?: string;
  album?: string;
}

export interface SocialShare {
  shareLink(link: string, description: string): Promise<any>;
  shareVideo(videoUri: string): Promise<any>;
}

export type SocialProvider = 'facebook' | 'twitter' | 'instagram';
