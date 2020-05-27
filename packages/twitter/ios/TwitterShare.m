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
  const long long kVideoMaxFileSize = 4 * 1024 * 1024;
  NSURL *videoURL = [NSURL fileURLWithPath:url];
  AVURLAsset *asset = [AVURLAsset URLAssetWithURL:videoURL options:nil];
  AVAssetExportSession *exportSession = nil;
  for (NSString * string in @[AVAssetExportPresetHighestQuality,AVAssetExportPresetMediumQuality,AVAssetExportPresetLowQuality]) {
    exportSession = [[AVAssetExportSession alloc] initWithAsset:asset presetName:string];
    exportSession.shouldOptimizeForNetworkUse = YES;
    exportSession.outputFileType = AVFileTypeMPEG4;
    exportSession.timeRange = CMTimeRangeMake(kCMTimeZero, asset.duration);
    unsigned long long espectedFileSize = exportSession.estimatedOutputFileLength;
    if (espectedFileSize < kVideoMaxFileSize) {
      break;
    }
  }
  // Compress video
  NSString *fileName = [NSString stringWithFormat:@"%@_%@", [[NSProcessInfo processInfo] globallyUniqueString], @"video.mp4"];
  NSString * filePath = [NSTemporaryDirectory() stringByAppendingPathComponent:fileName];
  NSURL *fileURL = [NSURL fileURLWithPath:filePath];
  exportSession.outputURL = fileURL;
  [exportSession exportAsynchronouslyWithCompletionHandler:^{
    UIImage *thumbnail = [self videoThumbnail:fileURL];
    NSError* error;
    NSData *videoData = [NSData dataWithContentsOfURL:fileURL options:NSDataReadingUncached error:&error];
    dispatch_async(dispatch_get_main_queue(), ^{
      UIViewController *topViewController = RCTPresentedViewController();
      if ([[Twitter sharedInstance].sessionStore hasLoggedInUsers]) {
        TWTRComposerViewController *composer = [[TWTRComposerViewController alloc] initWithInitialText:description image:thumbnail videoData:videoData];
        // Called from a UIViewController
        [topViewController presentViewController:composer animated:YES completion:nil];
      } else {
        [[Twitter sharedInstance] logInWithCompletion:^(TWTRSession *session, NSError *error) {
          if (session) {
            TWTRComposerViewController *composer = [[TWTRComposerViewController alloc] initWithInitialText:description image:thumbnail videoData:videoData];
            [topViewController presentViewController:composer animated:YES completion:nil];
          } else {
            UIAlertController *alert = [UIAlertController alertControllerWithTitle:@"No Twitter Accounts Available" message:@"You must log in before presenting a composer." preferredStyle:UIAlertControllerStyleAlert];
            [topViewController presentViewController:alert animated:YES completion:nil];
          }
        }];
      }
    });
  }];
}

- (UIImage*)videoThumbnail:(NSURL *)url
{
  AVURLAsset *asset = [AVURLAsset assetWithURL:url];
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
