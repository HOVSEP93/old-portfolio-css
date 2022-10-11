import React, { useState } from "react";
import ProjectsCompleted from "react-countup";
import Days from "react-countup";
import Born from "react-countup";
import TeaDrinked from "react-countup";

const Counter = () => {
  const [projects, setProjects] = useState(0);
  const [days, setDays] = useState(0);
  const [born, setBorn] = useState(0);
  const [tea, settea] = useState(0);

  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    if (Math.round(scrollPosition) >= 5700) {
      setProjects(21);
      setDays(300);
      setBorn(1993);
      settea(9999);
    }
  });

  const counterStyle = {
    color: "tomato",
    fontWeight: "900",
    fontSize: "4rem",
  };

  const counterText = {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: "1rem",
  };

  return (
    <div className="container p-5">
      <div className="row justify-content-center">
        <div className="col-md-3 text-center">
          <ProjectsCompleted
            style={counterStyle}
            start={0}
            end={projects}
            duration={2}
          />
          <h5 style={counterText}>projects completed ⏳</h5>
        </div>
        <div className="col-md-3 text-center">
          <Days style={counterStyle} start={0} end={days} duration={3} />
          <h5 style={counterText}>days i code 👨‍💻</h5>
        </div>
        <div className="col-md-3 text-center">
          <Born style={counterStyle} start={0} end={born} duration={3} />
          <h5 style={counterText}>year i born 👶</h5>
        </div>
        <div className="col-md-3 text-center">
          <TeaDrinked style={counterStyle} start={0} end={tea} duration={3} />
          <h5 style={counterText}>cup of tea drinked ☕</h5>
        </div>
      </div>
    </div>
  );
};

export default Counter;
