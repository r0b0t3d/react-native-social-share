# react-native-twitter

## Getting started

`$ npm install react-native-twitter --save`

### Mostly automatic installation

`$ react-native link react-native-twitter`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-twitter` and add `Twitter.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libTwitter.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.reactlibrary.TwitterPackage;` to the imports at the top of the file
  - Add `new TwitterPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-twitter'
  	project(':react-native-twitter').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-twitter/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-twitter')
  	```

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

## Usage
```javascript
import Twitter from 'react-native-twitter';

// TODO: What to do with the module?
Twitter;
```
