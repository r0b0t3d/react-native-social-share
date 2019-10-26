# react-native-utils

## Getting started

`$ npm install react-native-utils --save`

### Mostly automatic installation

`$ react-native link react-native-utils`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-utils` and add `Utils.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libUtils.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.reactlibrary.UtilsPackage;` to the imports at the top of the file
  - Add `new UtilsPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-utils'
  	project(':react-native-utils').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-utils/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-utils')
  	```


## Usage
```javascript
import Utils from 'react-native-utils';

// TODO: What to do with the module?
Utils;
```
