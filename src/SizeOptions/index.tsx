import React, { useState } from "react";
import { Options } from "../LearningOptions/style";

const SizeOptions = (props: { actionProvider: { handleSize: any } }) => {
  const options = [
    {
      text: "1-10",
      handler: props.actionProvider.handleSize,
      id: 1,
    },
    {
      text: "11-50",
      handler: props.actionProvider.handleSize,
      id: 2,
    },
    {
      text: "51-100",
      handler: props.actionProvider.handleSize,
      id: 3,
    },
    {
      text: "101-500",
      handler: props.actionProvider.handleSize,
      id: 4,
    },
    {
      text: "More than 500",
      handler: props.actionProvider.handleSize,
      id: 5,
    },
  ];
  const handler2 = (option: any) => {
    let button1 = JSON.parse(localStorage.getItem("CorrectData") || "{}");
    console.log(button1);
    button1.push(option);
    localStorage.setItem("CorrectData", JSON.stringify(button1));
  };
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleButtonClick = () => {
    // code to handle the button click
    setButtonDisabled(true);
  };

  const optionsMarkup = options.map((option) => (
    <Options>
      <button
        key={option.id}
        onClick={() => {
          option.handler();
          handler2(option.text);
          handleButtonClick();
        }}
        disabled={buttonDisabled}
        className={buttonDisabled ? "disabled" : ""}
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

export default SizeOptions;
