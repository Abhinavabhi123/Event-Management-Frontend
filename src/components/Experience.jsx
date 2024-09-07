import { useState } from "react";
import "../styles/experience.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Experience() {
  
  const [counterActive, setCounterActive] = useState(false);

  const onEnterViewport = () => {
    setCounterActive(true);
  };

  const onExitViewport = () => {
    setCounterActive(false);
  };

  return (
    <div className="experience-main-wrapper">
      <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
        {counterActive && (
          <div className="experience-inner-wrapper">
            <div className="experience-counter-wrapper">
              <span>
                <CountUp start={0} end={100} duration={3}/>
                <span>
                  <span>M</span>+
                </span>
              </span>
              <p>Registrations Processed</p>
            </div>
            <div className="experience-counter-wrapper">
              <span>
                <CountUp start={0} end={7} duration={3}/>
                <span>
                  <span>M</span>+
                </span>
              </span>
              <p>Events Managed</p>
            </div>
            <div className="experience-counter-wrapper">
              <span>24/7</span>
              <p>Customer Support</p>
            </div>
          </div>
        )}
      </ScrollTrigger>
    </div>
  );
}
