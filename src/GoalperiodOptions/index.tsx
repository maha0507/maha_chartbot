import React from "react";
import { Options } from "../LearningOptions/style";
import { useState } from "react";

const GoalperiodOptions = (props: {
  actionProvider: { handlePeriod: any };
}) => {
  const options = [
    {
      text: "Monthly",
      handler: props.actionProvider.handlePeriod,
      id: 1,
    },
    {
      text: "Quarterly",
      handler: props.actionProvider.handlePeriod,
      id: 2,
    },
  ];
  const [buttonid, setbuttonid] = useState(0);
  const handler2 = (option: any) => {
    let button1 = JSON.parse(localStorage.getItem("CorrectData") || "{}");
    console.log(button1);
    button1.push(option);
    localStorage.setItem("CorrectData", JSON.stringify(button1));
  };

  const optionsMarkup = options.map((option) => (
    <Options>
      <>
        <button
          key={option.id}
          onClick={() => {
            option.handler();
            handler2(option.text);
            setbuttonid(option.id);
          }}
          className={buttonid === option.id ? "highlighted" : ""}
        >
          {option.text}
        </button>
      </>
    </Options>
  ));

  return (
    <Options>
      <div className="learning-options-container">{optionsMarkup}</div>
    </Options>
  );
};

export default GoalperiodOptions;
