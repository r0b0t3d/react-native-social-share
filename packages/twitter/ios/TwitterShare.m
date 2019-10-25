#import "TwitterShare.h"
#import <TwitterKit/TWTRKit.h>

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

    UIViewController *rootViewController = [UIApplication sharedApplication].delegate.window.rootViewController;
    UIViewController *topViewController = [self topViewControllerWithRootViewController:rootViewController];
    // Called from a UIViewController
    [composer showFromViewController:topViewController completion:^(TWTRComposerResult result) {
        if (result == TWTRComposerResultCancelled) {
            resolve(@NO);
        } else {
            resolve(@YES);
        }
    }];
}

- (UIViewController*)topViewControllerWithRootViewController:(UIViewController*)rootViewController {
    if ([rootViewController isKindOfClass:[UITabBarController class]]) {
        UITabBarController* tabBarController = (UITabBarController*)rootViewController;
        return [self topViewControllerWithRootViewController:tabBarController.selectedViewController];
    } else if ([rootViewController isKindOfClass:[UINavigationController class]]) {
        UINavigationController* navigationController = (UINavigationController*)rootViewController;
        return [self topViewControllerWithRootViewController:navigationController.visibleViewController];
    } else if (rootViewController.presentedViewController) {
        UIViewController* presentedViewController = rootViewController.presentedViewController;
        return [self topViewControllerWithRootViewController:presentedViewController];
    } else {
        return rootViewController;
    }
}

@end
