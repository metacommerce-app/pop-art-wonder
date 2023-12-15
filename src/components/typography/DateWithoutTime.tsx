import React from 'react';
import dayjs from 'dayjs';

interface Props {
  children: Date;
  className?: string;
}

const DateWithoutTime: React.FC<Props> = ({ children, className }) => {
  const format = 'YYYY-MM-DD';
  const formatted = dayjs(children).format(format);
  return <span className={className}>{formatted}</span>;
};

export default DateWithoutTime;
