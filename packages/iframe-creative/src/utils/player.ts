/**
 * Check if HTMLVideoElement support mp4
 * @param videoElement
 * @returns {boolean} True if Mp4 is supported, otherwise false.
 */
function isMP4Supported(videoElement: HTMLVideoElement) {
	return videoElement.canPlayType("video/mp4") !== "";
}

/**
 * Check if the bower support mp2t
 * @returns {boolean} True if HLS is supported, otherwise false.
 */
function isHLSSupported() {
	return "MediaSource" in window && MediaSource.isTypeSupported && MediaSource.isTypeSupported("video/mp2t");
}

/**
 * Check if HTMLVideoElement support mp4
 * @param videoElement
 * @returns {boolean} True if Dash is supported, otherwise false.
 */
function isDASHSupported() {
	if ("dashjs" in window) {
		return window.dashjs.MediaPlayer().isSupported();
	}
	return false;
}
