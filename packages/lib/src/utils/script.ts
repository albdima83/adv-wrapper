export function loadScript(url: string): Promise<void> {
	return new Promise((resolve, reject) => {
		const script = document.createElement("script");
		script.src = url;
		script.async = true;
		script.onload = () => resolve();
		script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
		document.head.appendChild(script);
	});
}
export function loadScripts(urls: string[]): Promise<void[]> {
	return Promise.all(urls.map(loadScript));
}
