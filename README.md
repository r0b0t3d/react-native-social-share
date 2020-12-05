# @react-native-social-share/core

## Getting started

`$ npm install @react-native-social-share/core --save`

### Mostly automatic installation

`$ react-native link react-native-core`

## Share via Facebook
** Require: [react-native-fbsdk](https://github.com/facebook/react-native-fbsdk)

## Share via Twitter
** Require: [@react-native-social-share/twitter](https://github.com/r0b0t3d/react-native-social-share/tree/master/packages/twitter)

## Share via Instagram
** Require: [@react-native-social-share/instagram](https://github.com/r0b0t3d/react-native-social-share/tree/master/packages/instagram)

## Setup optional dependencies

In your metro.config.js
```
module.exports = {
  transformer: {
    allowOptionalDependencies: true, // <-- Add this
  },
}
```

## Usage
```javascript
import RNSocialShare from '@react-native-social-share/core';

RNSocialShare.shareLink("facebook", options);
```

## Methods
1. `shareLink(provider, options)`
- provider: 'facebook' | 'twitter';
- options:
	+ link: string link to share
	+ description: string (optional)
	+ hashtag: string (optional) (Facebook and Twitter)
	+ peopleIds: string[] (optional) (Facebook only) people ids to tag

```
const options = {
	link: "https://github.com/r0b0t3d/react-native-social-share",
	description: "React Native Social Share",
	peopleIds: "",
	hashtag: "#sharelink",
};
RNSocialShare.shareLink("facebook", options);
```
Note: Instagram do not support share link

2. `sharePhoto(provider, options)`
3. `shareVideo(provider, options)`
- provider: 'facebook' | 'twitter' | 'instagram';
- options:
	+ localFile: string file to share
	+ hashtag: string (optional) (Facebook and Twitter)
	+ peopleIds: string[] (optional) (Facebook only) people ids to tag
```
import CameraRoll from '@react-native-community/

const localFile = "";
const uri = CameraRoll.save(localFile, { type: 'photo' });
const options = {
	localFile: uri,
	peopleIds: "",
	hashtag: "#sharefile",
};
RNSocialShare.sharePhoto("facebook", options);
```

Notes: `Facebook` and `Instagram` app must be installed

