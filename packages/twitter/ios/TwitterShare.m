#import "TwitterShare.h"
#import <TwitterKit/TWTRKit.h>

@implementation TwitterShare

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(shareLink:(NSString *)url description:(NSString *)description)
{
    TWTRComposer *composer = [[TWTRComposer alloc] init];

    
    [composer setText:@"just setting up my Twitter Kit"];
    [composer setImage:[UIImage imageNamed:@"twitterkit"]];
    
    UIViewController *rootViewController = [UIApplication sharedApplication].delegate.window.rootViewController;

    // Called from a UIViewController
    [composer showFromViewController:rootViewController completion:^(TWTRComposerResult result) {
        if (result == TWTRComposerResultCancelled) {
            NSLog(@"Tweet composition cancelled");
        }
        else {
            NSLog(@"Sending Tweet!");
        }
    }];
}

@end
