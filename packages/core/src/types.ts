export type ShareMediaOptions = {
  localFile?: string;
  assetId?: string;
  album?: string;
  hashtag?: string;
  peopleIds?: string[];
};

export type ShareLinkOptions = {
  link: string;
  description?: string;
  hashtag?: string;
  peopleIds?: string[];
};

export interface SocialShare {
  shareLink(options: ShareLinkOptions): Promise<any>;
  shareVideo(options: ShareMediaOptions): Promise<any>;
  sharePhoto(options: ShareMediaOptions): Promise<any>;
}

export type SocialProvider = 'facebook' | 'twitter' | 'instagram';
