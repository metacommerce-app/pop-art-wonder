import React from 'react';
import { useTranslation } from 'react-i18next';
import { clientConfig } from '@/client/types/config';
import dayjs from 'dayjs';

const CountdownTitle: React.FC = () => {
  const { t } = useTranslation()

  const now = dayjs()
  const isStarted = now.isAfter(dayjs(clientConfig.startDate))
  const isFinished = now.isAfter(dayjs(clientConfig.endDate))

  if (isFinished) {
    return t("Minting has ended")
  }

  if (isStarted) {
    return t("Closes in")
  }

  return t("Opens in")
};

export default CountdownTitle;