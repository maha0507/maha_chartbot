import Chatbot from "react-chatbot-kit";
import ActionProvider from "../ActionProvider";
import Config from "../Config";
import MessageParser from "../MessageParser";
import "./style.css";

export const Chat = () => {
  return (
    <Chatbot
      config={Config}
      actionProvider={ActionProvider}
      messageParser={MessageParser}
    />
  );
};
