export default function FormattedDate({ date, timezone, short = false }) {
  if (!date) {
    return null;
  }

  const formattedDate = date instanceof Date ? date : new Date(date * 1000);

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
