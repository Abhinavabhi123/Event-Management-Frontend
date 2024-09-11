import { useState } from "react";
import "../../styles/events/event-drawer.css";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

export default function EventsDrawer(Props) {
  const { categories } = Props;
  const [listOpen, setListOpen] = useState([0]);

  function handleOpenList(index) {
    const isIncluded = listOpen.includes(index);
    console.log(isIncluded, "opop");

    if (isIncluded) {
      const result = listOpen.filter((id) => id !== index);
      setListOpen(result);
    } else {
      setListOpen((prev) => [...prev, index]);
    }
  }

  function isOpened(index) {
    const isIncluded = listOpen.includes(index);
    return isIncluded;
  }

  return (
    <div className="event-drawer-wrapper-container">
      <div className="event-title">
        <h4>All Categories</h4>
      </div>
      {categories.map((category, index) => (
        <div key={index} className="event-category-wrapper">
          <div onClick={() => handleOpenList(index)}>
            <p>{category.category}</p>
            {isOpened(index) ? (
              <MdOutlineKeyboardArrowUp />
            ) : (
              <MdOutlineKeyboardArrowDown />
            )}
          </div>
          <ul
            className={`${
              isOpened(index) ? "category-list-open" : "category-list-close"
            }`}
          >
            {category.events.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
