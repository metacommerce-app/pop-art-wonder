import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CountdownWidget from './CountdownWidget';
import dayjs from 'dayjs';

interface CountdownProps {
  target: Date;
}

const Countdown: React.FC<CountdownProps> = ({ target }) => {

  const { t } = useTranslation()

  const [timeLeft, setTimeLeft] = useState({days: 0, hours: 0, minutes: 0, seconds: 0 });

  /**
   * TODO: switch to dayjs
   */
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = dayjs();
      const targetTime = dayjs(target);
  
      const difference = targetTime.diff(now);
  
      if (difference > 0) {
        const days = targetTime.diff(now, 'day');
        const hours = targetTime.subtract(days, 'day').diff(now, 'hour');
        const minutes = targetTime.subtract(days, 'day').subtract(hours, 'hour').diff(now, 'minute');
        const seconds = targetTime.subtract(days, 'day').subtract(hours, 'hour').subtract(minutes, 'minute').diff(now, 'second');
  
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
  
    const timerId = setInterval(calculateTimeLeft, 1000);
    
    // Clean up the interval when the component is unmounted
    return () => clearInterval(timerId);
  }, [target]);

  return (
    <>
      <CountdownWidget title={t("Days")} timeLeft={timeLeft.days} />
      <CountdownWidget title={t("Hours")} timeLeft={timeLeft.hours} />
      <CountdownWidget title={t("Minutes")} timeLeft={timeLeft.minutes} />
      <CountdownWidget title={t("Seconds")} timeLeft={timeLeft.seconds} />
    </>
  );
};

export default Countdown;