let TwitterShare: any = null;
try {
  // @ts-ignore
  TwitterShare = require('@react-native-social-share/twitter').default;
} catch (error) {}
if (!TwitterShare) {
  throw new Error('Your project need to install @react-native-social-share/twitter');
}

export default TwitterShare;
