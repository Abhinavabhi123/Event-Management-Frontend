import { useEffect } from "react";
import "../../styles/events/home-event.css";
import EventCards from "./EventCards";
import { useState } from "react";
import { getEvents } from "../../Services/ApiServices";

export default function HomeEvent() {
  const [eventData, setEventData] = useState();

  useEffect(() => {
    getEvents(setEventData);
  }, []);
  console.log(eventData, "data");

  return (
    <div className="home-event-wrapper-container">
      <p>Events</p>
      <div className="home-event-wrapper">
        {eventData &&
          eventData.length > 0 &&
          eventData.map((event, index) => (
            <EventCards key={index} event={event} />
          ))}
      </div>
    </div>
  );
}
