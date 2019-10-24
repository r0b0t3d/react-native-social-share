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


## Usage
```javascript
import Twitter from 'react-native-twitter';

// TODO: What to do with the module?
Twitter;
```
