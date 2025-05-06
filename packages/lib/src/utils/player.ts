/**
 * Utility to preload Video
 * @param video @type {HTMLVideoElement}
 * @returns
 */
export function preloadVideo(video: HTMLVideoElement): Promise<void> {
	return new Promise((resolve, reject) => {
		video.preload = "auto";
		video.load();
		const onCanPlay = () => {
			video.removeEventListener("canplay", onCanPlay);
			resolve();
		};
		const onError = () => {
			video.removeEventListener("error", onError);
			reject(new Error("Video failed to load"));
		};
		video.addEventListener("canplaythrough", onCanPlay);
		video.addEventListener("error", onError);
	});
}
