import React, { useState } from "react";
import { Options } from "./style";

const LearningOptions = (props: { actionProvider: { handleAlright: any } }) => {
  const options = [
    {
      text: "Alright",
      handler: props.actionProvider.handleAlright,
      id: 1,
    },
  ];
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

export default LearningOptions;
