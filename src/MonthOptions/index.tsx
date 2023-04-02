import React, { useState } from "react";
import { Options } from "../LearningOptions/style";

const MonthOptions = (props: { actionProvider: { handleMonth: any } }) => {
  const options = [
    {
      text: "january",
      handler: props.actionProvider.handleMonth,
      id: 1,
    },
    {
      text: "April",
      handler: props.actionProvider.handleMonth,
      id: 2,
    },
    {
      text: "July",
      handler: props.actionProvider.handleMonth,
      id: 3,
    },
    {
      text: "October",
      handler: props.actionProvider.handleMonth,
      id: 4,
    },
  ];
  const handler2 = (option: any) => {
    let button1 = JSON.parse(localStorage.getItem("CorrectData") || "{}");
    console.log(button1);
    button1.push(option);
    localStorage.setItem("CorrectData", JSON.stringify(button1));
  };
  const [buttonid, setButtonid] = useState(0);
  const optionsMarkup = options.map((option) => (
    <Options>
      <button
        key={option.id}
        onClick={() => {
          option.handler();
          handler2(option.text);
          setButtonid(option.id);
        }}
        className={option.id === buttonid ? "highlighted" : ""}
      >
        {option.text}
      </button>
    </Options>
  ));

  return (
    <Options>
      <div className="learning-options-container">{optionsMarkup}</div>
    </Options>
  );
};

export default MonthOptions;
