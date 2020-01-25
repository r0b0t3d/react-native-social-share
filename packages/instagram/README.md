# react-native-instagram

## Getting started

`$ npm install @react-native-social-share/instagram --save`

or

`$ yarn add @react-native-social-share/instagram`


## For react-native < 0.60
### Mostly automatic installation

`$ react-native link @react-native-social-share/instagram`

## Setup
### iOS
**Custom URL Scheme**
In order for your app to use Instagram's custom URL scheme, you mush whitelist the scheme by adding instagram:// to the LSApplicationQueriesSchemes key in your app's Info.plist.

https://developers.facebook.com/docs/instagram/sharing-to-feed/

## Usage
Instagram allows share files that are stored in library. So if you have an local file, you can first save it to library via `CameraRoll`
```javascript
import CameraRoll from '@react-native-community/cameraroll';

const localFile = "";
const uri = CameraRoll.save(localFile, { type: 'photo' });
```
then
```
import InstagramShare from '@react-native-social-share/instagram';

InstagramShare.shareVideo({ localFile: uri });

// Or

InstagramShare.sharePhoto({ localFile: uri });
```
