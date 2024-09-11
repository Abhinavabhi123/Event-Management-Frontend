import "../styles/event-page.css";
import ContactHeader from "../components/ContactHeader";
import EventsDrawer from "../components/Events/EventsDrawer";
import EventView from "../components/Events/EventView";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { getAllCategories } from "../Services/ApiServices";

export default function EventPages() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllCategories(setCategories);
  }, []);

  return (
    <div className="event-page-wrapper-container">
      <ContactHeader />
      <NavBar />
      <div className="event-page-separator">
        {categories.length > 0 && <EventsDrawer categories={categories} />}
        <EventView />
      </div>
    </div>
  );
}
