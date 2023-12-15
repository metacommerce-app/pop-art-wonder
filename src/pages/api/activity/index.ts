
import { SendToEngageCommandHandler } from '@/server/commands/SendToEngage';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;
  const {type, ...payload} = body;
  if (!type ) {
    throw new Error('Missing type');
  }
  const ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress) as string;
  const handler = new SendToEngageCommandHandler();

  handler.handle({
    type: body.type,
    payload: { 
        ip,
        ...payload
    }
  })
  res.status(200).json({ status: 'ok' })
}