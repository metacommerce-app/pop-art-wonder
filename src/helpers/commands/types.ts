export interface IHandleCommand<T, R> {
  handle(command: T): Promise<R>;
}
export interface IHandleEmptyCommand {
  handle(): Promise<void>;
}
