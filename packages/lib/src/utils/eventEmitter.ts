export interface EventListener {
	handler: (...args: unknown[]) => void;
	scope: object | null;
	capture: boolean;
}

export class EventEmitter {
	private listeners: { [event: string]: EventListener[] } = {};

	public addEventListener(
		type: string,
		handler: { handleEvent?: (...args: unknown[]) => void } | ((...args: unknown[]) => void) | null,
		capture: boolean = false,
		handlerScope: object | null = null,
	): void {
		if (handler === null) {
			throw new Error("Handler cannot be null");
		}

		if (!this.listeners[type]) {
			this.listeners[type] = [];
		}

		const extractedHandler = typeof handler === "function" ? handler : handler.handleEvent;

		if (typeof extractedHandler !== "function") {
			throw new Error("Handler must be a function or have a handleEvent method");
		}

		this.listeners[type].push({
			handler: extractedHandler,
			scope: handlerScope,
			capture,
		});
	}

	public emit(type: string, ...args: unknown[]): void {
		if (this.listeners[type]) {
			this.listeners[type].forEach((listener) => {
				listener.handler.apply(listener.scope, args);
			});
		}
	}

	public removeEventListener(
		type: string,
		handler: { handleEvent?: (...args: unknown[]) => void } | ((...args: unknown[]) => void) | null,
		capture: boolean = false,
	): void {
		if (!this.listeners[type] || handler === null) return;

		const extractedHandler = typeof handler === "function" ? handler : handler.handleEvent;

		this.listeners[type] = this.listeners[type].filter(
			(listener) => listener.handler !== extractedHandler || listener.capture !== capture,
		);
	}

	public clearEventListeners(type: string): void {
		delete this.listeners[type];
	}

	public clearAllEventListeners(): void {
		this.listeners = {};
	}
}
