# react-native-core

## Getting started

`$ npm install react-native-core --save`

### Mostly automatic installation

`$ react-native link react-native-core`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-core` and add `Core.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libCore.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.reactlibrary.CorePackage;` to the imports at the top of the file
  - Add `new CorePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-core'
  	project(':react-native-core').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-core/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-core')
  	```


## Usage
```javascript
import Core from 'react-native-core';

// TODO: What to do with the module?
Core;
```
