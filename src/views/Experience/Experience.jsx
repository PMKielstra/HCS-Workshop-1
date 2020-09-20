import React from "react";
import "./Experience.css";
import HideBoring from "../../components/HideBoring/HideBoring";

export default function ExperienceScreen() {
  return (
    <div className="screen-background">
      <ul id="experiencelist">
        <li className="boring">Math degree from Harvard</li>
        <li>HackHarvard head of design for like ten minutes</li>
        <li>Harvard Independent comp director, staff writer, and webmaster</li>
        <li className="boring">Speaks French</li>
      </ul>
      <HideBoring boringclass="boring" />
    </div>
  );
}
