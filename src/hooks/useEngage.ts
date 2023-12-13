import { EngageEventTypes } from '@/types/engage';

const useEngage = () => {
  const publishEvent = async (eventType: EngageEventTypes, payload: Record<string, any>) => {
    await fetch(`/api/activity`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: eventType,
        ...payload,
        userAgent: navigator.userAgent,
      }),
    });
  };
  return { publishEvent };
};

export default useEngage;
