declare function saveToCameraRoll(localFile: string, options: {
    type: 'video' | 'photo';
    album: string;
}): void;
declare const _default: {
    saveToCameraRoll: typeof saveToCameraRoll;
};
export default _default;
