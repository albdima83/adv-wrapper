export class AdError implements google.ima.AdError {
  name: string;
  code: number;
  message: string;
  stack?: string | undefined;
  cause?: unknown;

  constructor(code: number, message: string) {
    this.name = "AdError";
    this.message = message;
    this.code = code;
  }
  getErrorCode(): number {
    return this.code;
  }
  getInnerError(): Error | null {
    return new Error(this.message);
  }
  getMessage(): string {
    throw this.message;
  }
  getType(): string {
    throw "";
  }
  getVastErrorCode(): number {
    throw this.code;
  }
}
