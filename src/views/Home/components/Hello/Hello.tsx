import React, { useEffect, useState } from "react";
import "../../../../styles/styles.css";
import { StarBackground } from "components/StarBackground/StarBackground";

export const Hello = () => {
  const [display, setDisplay] = useState(0);

  const addDisplay = () => {
    if (display < 3) {
      setDisplay(display + 1);
    }
  };

  useEffect(() => {
    setTimeout(addDisplay, 800);
  }, [display]);

  return (
    <>
      <StarBackground />
      <div className="title-wrapper">
        <h1 className="title" style={{ height: `${display * 1.5}em` }}>
          <span>Hi,</span>

          <span>
            <br />
            I'm Martin,
          </span>

          <span>
            <br />
            software engineer.
          </span>
        </h1>
      </div>
    </>
  );
};
