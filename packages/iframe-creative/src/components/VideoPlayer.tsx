import { createSignal, onCleanup, onMount } from "solid-js";

const ADS_VIDEO_EVENTS: Array<keyof HTMLMediaElementEventMap> = [
	"play",
	"pause",
	"ended",
	"waiting",
	"stalled",
	"canplay",
	"playing",
	"seeking",
	"seeked",
	"timeupdate",
	"durationchange",
	"loadedmetadata",
	"suspend",
	"abort",
];

const VideoPlayer = () => {
	const [isDASHLoaded, setIsDASHLoaded] = createSignal(false);
	const [error, setError] = createSignal<string | null>(null);
	let videoElement: HTMLVideoElement | undefined;

	function cleanUpVideoPlayer() {
		const vidElement = videoElement;
		if (!vidElement) {
			return;
		}
		vidElement.pause();
		vidElement.src = "";
	}

	function adsVideoEventsListener() {}

	function adsVideoErrorListener() {}

	function addVideoListeners() {
		const vidElement = videoElement;
		if (!vidElement) {
			return;
		}
		ADS_VIDEO_EVENTS.forEach((type) => vidElement.addEventListener(type, adsVideoEventsListener));
		vidElement.addEventListener("error", adsVideoErrorListener);
	}

	onCleanup(() => {
		setIsDASHLoaded(false); // Clean up any resources if needed
	});

	onMount(() => {});

	return (
		<div class="">
			<video ref={videoElement} controls={false} style={{ width: "100%", "max-width": "600px" }} />
		</div>
	);
};

export { VideoPlayer };
