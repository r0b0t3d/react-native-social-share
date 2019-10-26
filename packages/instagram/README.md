# react-native-instagram

## Getting started

`$ npm install react-native-instagram --save`

### Mostly automatic installation

`$ react-native link react-native-instagram`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-instagram` and add `Instagram.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libInstagram.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.reactlibrary.InstagramPackage;` to the imports at the top of the file
  - Add `new InstagramPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-instagram'
  	project(':react-native-instagram').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-instagram/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-instagram')
  	```


## Setup
### iOS
**Custom URL Scheme**
In order for your app to use Instagram's custom URL scheme, you mush whitelist the scheme by adding instagram:// to the LSApplicationQueriesSchemes key in your app's Info.plist.

https://developers.facebook.com/docs/instagram/sharing-to-feed/

## Usage
```javascript
import InstagramShare from 'react-native-instagram';

const videoUri = "";
InstagramShare.shareVideo(videoUri);
```
