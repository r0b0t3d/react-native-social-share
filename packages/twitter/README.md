# @react-native-social-share/twitter

## Getting started

`$ npm install @react-native-social-share/twitter --save`

### Mostly automatic installation (RN < 0.60)

`$ react-native link @react-native-social-share/twitter`

## Setup
Obtain Application Key & Secret
-------------------------------

Twitter requires that all API requests be authenticated with tokens that
can be traced back to an individual Twitter App. If you already have
keys for a Twitter app you can pass them directly to the
`TWTRTwitter.sharedInstance().start()` method.

To create a new Twitter app or use existing Twitter app, visit [Twitter
apps dashboard](https://apps.twitter.com/) and copy the keys from the
"Keys and Access Tokens" tab of your app page.

To add call back URL:

1.  In [Twitter apps dashboard](https://apps.twitter.com/), find your
    application and go to the permissions tab.
2.  Select the appropriate permissions for your needs (e.g. "Read and
    write")
3.  Set callback urls
	- `twitterkit-{consumerId}://` --> for iOS
	- `twittersdk://`	--> for Android
4.  Click update settings.

iOS
-------------------------------
```

#import <TwitterKit/TWTRKit.h>

// Objective C
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions 
{
    [[Twitter sharedInstance] startWithConsumerKey:@"hTpkPVU4pThkM0" consumerSecret:@"ovEqziMzLpUOF163Qg2mj"];
}

- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<NSString *, id> *)options
{
    return [[Twitter sharedInstance] application:app openURL:url options:options];
}
```

Configure Info.Plist
--------------------

Twitter Kit looks for a URL scheme in the format
`twitterkit-<consumerKey>`, where
`consumerKey` is your application's Twitter API key, e.g.
`twitterkit-dwLf79lNQfsJ`.

You can find your consumer key in the [Twitter app
dashboard](https://apps.twitter.com).

In your app's `Info.plist`, add URL Schemes by adding code below after `<dict>`

```
// Info.plist
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>twitterkit-<consumerKey></string>
    </array>
  </dict>
</array>
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>twitter</string>
    <string>twitterauth</string>
</array>
```
**NOTE:** Although the callback URL will not be requested by Twitter Kit in your app, it **must** be set to a valid URL for the app to work with the SDK.

Android
-------------------------------
Add to AndroidManifest
```
<meta-data
    android:name="com.twitter.sdk.android.CONSUMER_KEY"
    android:value="consumerKey" />

<meta-data
    android:name="com.twitter.sdk.android.CONSUMER_SECRET"
    android:value="consumerSecret" />
```
## Usage
```javascript
import TwitterShare from '@react-native-social-share/twitter';

const link = "";
const description = "";
TwitterShare.shareLink({ link, description });
```
