import "../../styles/events/event-cards.css";

export default function EventCards(Props) {
  const { event } = Props;
  return (
    <div className="event-card-wrapper">
      <img src={event.image} alt="" />
      <div className="event-card-content">
        <h5>{event.title}</h5>
        <p>{event.desc}</p>
      </div>
    </div>
  );
}
