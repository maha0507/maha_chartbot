import React, { useState } from "react";
import { Options } from "../LearningOptions/style";

const IndustryOptions = (props: {
  actionProvider: { handleIndustry: any };
}) => {
  const options = [
    {
      text: "IT/TES/BPO/KPO",
      handler: props.actionProvider.handleIndustry,
      id: 1,
    },
    {
      text: "Startups",
      handler: props.actionProvider.handleIndustry,
      id: 2,
    },
    {
      text: "Telecom",
      handler: props.actionProvider.handleIndustry,
      id: 3,
    },
    {
      text: "Adversting/Media/Digital Marketing",
      handler: props.actionProvider.handleIndustry,
      id: 4,
    },
    {
      text: "Banking/insurance",
      handler: props.actionProvider.handleIndustry,
      id: 5,
    },
    {
      text: "Mining/Manufacturing/Engineering/Infrastructure",
      handler: props.actionProvider.handleIndustry,
      id: 6,
    },
    {
      text: "Travel/Entertainment/Hotel/Airlines",
      handler: props.actionProvider.handleIndustry,
      id: 7,
    },
    {
      text: "Mutual Funds/Broking/NBFCs/Fis",
      handler: props.actionProvider.handleIndustry,
      id: 8,
    },
    {
      text: "Healthcare/Hospitals/Pharma",
      handler: props.actionProvider.handleIndustry,
      id: 9,
    },
    {
      text: "Construction/Real Estate",
      handler: props.actionProvider.handleIndustry,
      id: 10,
    },
    {
      text: "Ecommerce",
      handler: props.actionProvider.handleIndustry,
      id: 11,
    },
    {
      text: "Retail",
      handler: props.actionProvider.handleIndustry,
      id: 12,
    },

    {
      text: "Auditing/Tax/Advisory",
      handler: props.actionProvider.handleIndustry,
      id: 13,
    },
    {
      text: "Logistics/Supply Chain",
      handler: props.actionProvider.handleIndustry,
      id: 14,
    },
    {
      text: "Oil & Energy",
      handler: props.actionProvider.handleIndustry,
      id: 15,
    },
    {
      text: "Advertising",
      handler: props.actionProvider.handleIndustry,
      id: 16,
    },
    {
      text: "Information Technology",
      handler: props.actionProvider.handleIndustry,
      id: 17,
    },
    {
      text: "Digital Marketing",
      handler: props.actionProvider.handleIndustry,
      id: 18,
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

export default IndustryOptions;
