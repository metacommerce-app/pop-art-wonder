import { serverConfig } from '@/server/config';
import { IHandleCommand } from '../../helpers/commands/types';

interface SendToEngageCommand {
  type: string;
  payload: any;
}

export class SendToEngageCommandHandler implements IHandleCommand<SendToEngageCommand, void> {
  async handle(command: SendToEngageCommand): Promise<void> {
    const { type, payload } = command;
    await fetch(`${serverConfig.engage.url}/activity/v1/stream`, {
      method: 'POST',
      headers: {
        'x-api-key': serverConfig.engage.apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: type,
        ...payload,
      }),
    });
  }
}
