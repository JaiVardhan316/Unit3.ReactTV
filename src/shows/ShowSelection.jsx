import { useState } from "react";
import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    <nav className="shows">
      <ul>
        {shows.map((show) => (
          <li
            className="show"
            key={show.name}
            onClick={() => setSelectedShow(show)}
          >
            {show.name};
          </li>
        ))}
      </ul>
    </nav>
  );
}
