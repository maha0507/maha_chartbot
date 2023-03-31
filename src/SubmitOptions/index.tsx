import React, { useState } from "react";
import { Options } from "../LearningOptions/style";

const SubmitOptions = (props: { actionProvider: { handleLogout: any } }) => {
  const options = [
    {
      text: "Submit",
      handler: props.actionProvider.handleLogout,
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

export default SubmitOptions;
