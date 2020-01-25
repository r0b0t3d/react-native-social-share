# react-native-utils

## Getting started

`$ npm install @react-native-social-share/utils --save`

### Mostly automatic installation

`$ react-native link @react-native-social-share/utils`

## Usage
```javascript
import Utils from 'react-native-utils';

// Check whether app installed or not
Utils.isAppInstalled(appIdentifier);

// [Android only] Get uri for local path
Utils.uriForFile(filePath);


```
