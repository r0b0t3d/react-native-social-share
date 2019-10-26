let InstagramShare: any = null;
try {
  // @ts-ignore
  InstagramShare = require('@react-native-social-share/instagram').default;
} catch (error) {}
if (!InstagramShare) {
  throw new Error('Your project need to install @react-native-social-share/instagram');
}

export default InstagramShare;
