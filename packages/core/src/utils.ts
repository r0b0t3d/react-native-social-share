function saveToCameraRoll(localFile: string, options: { type: 'video' | 'photo', album: string }) {
  // @ts-ignore
  const CameraRoll = require('./camera-roll');
  CameraRoll.saveToCameraRoll(localFile, []);
}

export default {
  saveToCameraRoll,
}
