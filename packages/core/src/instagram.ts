// @ts-ignore
import { Linking } from 'react-native';
import { ShareVideoOptions } from "./types";

async function shareLink(link: string, description: string) {
  
}

async function shareVideo(videoUri: string) {
  Linking.openUrl(`instagram://media?id=${videoUri}`)
}

export default {
  shareLink,
  shareVideo,
}
