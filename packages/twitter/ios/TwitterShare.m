#import "TwitterShare.h"
#import <TwitterKit/TWTRKit.h>
#import <React/RCTUtils.h>

@implementation TwitterShare

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(shareLink:(NSString *)url
                  description:(NSString *)description
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  TWTRComposer *composer = [[TWTRComposer alloc] init];
  
  
  [composer setText:description];
  [composer setURL:[NSURL URLWithString:url]];
  
  UIViewController *topViewController = RCTPresentedViewController();
  // Called from a UIViewController
  [composer showFromViewController:topViewController completion:^(TWTRComposerResult result) {
    if (result == TWTRComposerResultCancelled) {
      resolve(@NO);
    } else {
      resolve(@YES);
    }
  }];
}

RCT_EXPORT_METHOD(sharePhoto:(NSString *)url
                  description:(NSString *)description
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  TWTRComposer *composer = [[TWTRComposer alloc] init];
  
  [composer setText:description];
  [composer setImage:[UIImage imageWithContentsOfFile:url]];
  
  UIViewController *topViewController = RCTPresentedViewController();
  // Called from a UIViewController
  [composer showFromViewController:topViewController completion:^(TWTRComposerResult result) {
    if (result == TWTRComposerResultCancelled) {
      resolve(@NO);
    } else {
      resolve(@YES);
    }
  }];
}


RCT_EXPORT_METHOD(shareVideo:(NSString *)url
                  description:(NSString *)description
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  NSURL *videoURL = [NSURL URLWithString:url];
  UIImage *thumbnail = [self videoThumbnail:videoURL];
  NSData *videoData = [NSData dataWithContentsOfURL:videoURL];
  TWTRComposerViewController *composer = [[TWTRComposerViewController alloc] initWithInitialText:description image:thumbnail videoData:videoData];
  
  UIViewController *topViewController = RCTPresentedViewController();
  // Called from a UIViewController
  [topViewController presentViewController:composer animated:YES completion:nil];
}

- (UIImage*)videoThumbnail:(NSURL *)url
{
    AVAsset *asset = [AVAsset assetWithURL:url];
    AVAssetImageGenerator *generator = [[AVAssetImageGenerator alloc] initWithAsset:asset];
    generator.appliesPreferredTrackTransform = YES;
    CMTime time = CMTimeMake(1, 30);
    NSError *thumbnailError;
    CGImageRef thumbnailFrame = [generator copyCGImageAtTime:time actualTime:nil error:&thumbnailError];
    if (!thumbnailFrame) {
        NSLog(@"Could not retrieve thumbnail from video URL: %@", thumbnailError);
    }
    UIImage *thumbnail = [UIImage imageWithCGImage:thumbnailFrame];

    return thumbnail;
}

@end
