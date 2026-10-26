import React, { useEffect, useState } from "react";

export default function FormattedDate({
  date,
  timezone,
  short = false,
  live = false,
}) {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    if (!live) {
      return undefined;
    }

    setCurrentDate(new Date());

    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, [live]);

  if (!date && !live) {
    return null;
  }

  let formattedDate;

  if (live) {
    formattedDate = currentDate;
  } else {
    formattedDate = date instanceof Date ? date : new Date(date * 1000);
  }

  const day = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    timeZone: timezone,
  }).format(formattedDate);

  if (short) {
    return <div className="FormattedDate">{day}</div>;
  }

  const time = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: timezone,
  }).format(formattedDate);

  return (
    <div className="FormattedDate">
      {day}, {time}
    </div>
  );
}
