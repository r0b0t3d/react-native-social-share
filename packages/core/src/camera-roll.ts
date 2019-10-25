let CameraRoll = null;

try {
  // @ts-ignore
  CameraRoll = require('@react-native-community/cameraroll').default;
} catch (error) {}

if (!CameraRoll) {
  throw new Error('You need to install @react-native-community/cameraroll');
}

export default CameraRoll;
