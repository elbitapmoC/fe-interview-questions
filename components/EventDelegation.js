import React from "react";

const EventDelegation = () => {
  // EVENT DELEGATION - More efficient way to handle events.
  //                  - Instead of adding an event listener to EVERY element
  //                  - we add an event listener to the parent...
  let title;
  if (typeof document !== "undefined") {
    title = document.title;
    let buttons = document.querySelector(".button-group");
    buttons.addEventListener("click", (e) => {
      if (e.target.classList.contains("button-event")) {
        console.log(e.target.innerText);
      }
    });
  }

  return (
    <ul className="button-group text-center max-w-full">
      <li>
        <button className="button-event">A</button>
      </li>
      <li>
        <button className="button-event">B</button>
      </li>
      <li>
        <button className="button-event">C</button>
      </li>
      <li>
        <button className="button-event">D</button>
      </li>
      <li>
        <button className="button-event">E</button>
      </li>
      <li>
        <button className="button-event">F</button>
      </li>
      <li>
        <button className="button-event">G</button>
      </li>
    </ul>
  );
};

export default EventDelegation;
