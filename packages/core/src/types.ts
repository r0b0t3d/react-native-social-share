export type ShareMediaOptions = {
  localFile: string;
  assetId?: string;
  album?: string;
  hashtag?: string;
  peopleIds?: string[];
};

export interface SocialShare {
  shareLink(link: string, description: string): Promise<any>;
  shareVideo(videoUri: string): Promise<any>;
  sharePhoto(options: ShareMediaOptions): Promise<any>;
}

export type SocialProvider = 'facebook' | 'twitter' | 'instagram';
