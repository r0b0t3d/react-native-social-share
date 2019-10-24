import { SocialShare } from "./types";
declare class TwitterSocialShare implements SocialShare {
    shareLink(link: string, description: string): any;
    shareVideo(localVideo: string): Promise<void>;
}
declare const _default: TwitterSocialShare;
export default _default;
