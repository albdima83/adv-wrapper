export interface EventListener {
  handler: Function;
  scope: object | null;
  capture: boolean;
}

export class EventEmitter {
  private listeners: { [event: string]: EventListener[] } = {};

  // Add an event listener
  public addEventListener(
    type: string,
    handler: null | object,
    capture: boolean = false,
    handlerScope: object | null = null
  ): void {
    if (handler === null) {
      throw new Error("Handler cannot be null");
    }

    // If the event doesn't exist, initialize an empty array for it
    if (!this.listeners[type]) {
      this.listeners[type] = [];
    }

    // Add the listener
    this.listeners[type].push({
      handler:
        handler instanceof Function
          ? handler
          : (handler as { handleEvent: Function })?.handleEvent,
      scope: handlerScope,
      capture,
    });
  }

  // Emit an event
  public emit(type: string, ...args: any[]): void {
    if (this.listeners[type]) {
      this.listeners[type].forEach((listener) => {
        // Call the handler in the context of the scope, if defined
        listener.handler.apply(listener.scope, args);
      });
    }
  }

  // Remove a specific event listener
  public removeEventListener(
    type: string,
    handler: null | object,
    capture: boolean = false
  ): void {
    if (!this.listeners[type]) return;

    // Filter out the listener by the handler and capture flag
    this.listeners[type] = this.listeners[type].filter(
      (listener) =>
        listener.handler !==
          (handler instanceof Function
            ? handler
            : (handler as { handleEvent: Function })?.handleEvent) ||
        listener.capture !== capture
    );
  }

  // Clear all event listeners for a specific event type
  public clearEventListeners(type: string): void {
    if (this.listeners[type]) {
      delete this.listeners[type];
    }
  }

  // Clear all event listeners for all event types
  public clearAllEventListeners(): void {
    this.listeners = {};
  }
}
