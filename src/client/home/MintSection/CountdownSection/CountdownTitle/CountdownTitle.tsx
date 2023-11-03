import React from 'react';
import { useTranslation } from 'react-i18next';
import { config } from '@/client/types/config';
import dayjs from 'dayjs';

const CountdownTitle: React.FC = () => {
  const { t } = useTranslation()

  const now = dayjs()
  const isStarted = now.isAfter(dayjs(config.startDate))
  const isFinished = now.isAfter(dayjs(config.endDate))

  if (isFinished) {
    return t("Minting has ended")
  }

  if (isStarted) {
    return t("Closes in")
  }

  return t("Opens in")
};

export default CountdownTitle;