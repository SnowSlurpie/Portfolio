import React from "react";
import Typewriter from "typewriter-effect";

function typewriting() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Open Source Contributor",
          "MERN Stack Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default typewriting;