# react-native-facebook

## Getting started

`$ npm install react-native-facebook --save`

### Mostly automatic installation

`$ react-native link react-native-facebook`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-facebook` and add `Facebook.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libFacebook.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.reactlibrary.FacebookPackage;` to the imports at the top of the file
  - Add `new FacebookPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-facebook'
  	project(':react-native-facebook').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-facebook/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-facebook')
  	```


## Usage
```javascript
import Facebook from 'react-native-facebook';

// TODO: What to do with the module?
Facebook;
```
