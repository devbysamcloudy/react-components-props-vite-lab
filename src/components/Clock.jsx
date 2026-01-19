
import { useEffect, useState } from "react";
import { format } from "date-fns";

function Clock() {
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      <h1>{format(time, "HH:mm:ss")}</h1>
      <p>{format(time, "EEEE, MMMM do yyyy")}</p>
    </div>
  );
}

export default Clock;
