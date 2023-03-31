import { Typography } from "@mui/material";
import { createChatBotMessage } from "react-chatbot-kit";
import GoalperiodOptions from "../GoalperiodOptions";
import IndustryOptions from "../IndustryOptions";
import LearningOptions from "../LearningOptions";
import LogoutOptions from "../LogoutOptions";
import MonthOptions from "../MonthOptions";
import SizeOptions from "../SizeOptions";
import SubmitOptions from "../SubmitOptions";
import { Header } from "./style";
import avataricon from "../avatar.svg";
import { ArrowLeft } from "react-feather";

const Config = {
  botName: "LearningBot",
  initialMessages: [
    createChatBotMessage(
      "Hi ! I am ALTR. I will be guiding you for this setup",
      {}
    ),
    createChatBotMessage("Let us start with knowing about your organization", {
      widget: "learningOptions",
    }),
  ],
  customComponents: {
    // Replaces the default header
    header: () => (
      <Header>
        <ArrowLeft color="#dbdee3" style={{ padding: "8px" }} />
        <div>
          <img src={avataricon} alt="My SVG Image" />
        </div>
        <Typography fontSize={12} fontWeight={500} color="#4f5d75" padding={1}>
          ALTR BOT
        </Typography>
      </Header>
    ),
    botAvatar: () => <div></div>,
    userAvatar: () => <div></div>,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#dbdee3",
    },
    chatButton: {
      backgroundColor: "#4285f4",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props: JSX.IntrinsicAttributes) => (
        <LearningOptions
          actionProvider={{
            handleAlright: undefined,
          }}
          {...props}
        />
      ),
      props: {},
      mapStateToProps: ["someStateProperty"],
    },
    {
      widgetName: "industryOptions",
      widgetFunc: (props: JSX.IntrinsicAttributes) => (
        <IndustryOptions
          actionProvider={{
            handleIndustry: undefined,
          }}
          {...props}
        />
      ),
      props: {},
      mapStateToProps: ["someStateProperty"],
    },
    {
      widgetName: "sizeOptions",
      widgetFunc: (props: JSX.IntrinsicAttributes) => (
        <SizeOptions
          actionProvider={{
            handleSize: undefined,
          }}
          {...props}
        />
      ),
      props: {},
      mapStateToProps: ["someStateProperty"],
    },
    {
      widgetName: "monthOptions",
      widgetFunc: (props: JSX.IntrinsicAttributes) => (
        <MonthOptions
          actionProvider={{
            handleMonth: undefined,
          }}
          {...props}
        />
      ),
      props: {},
      mapStateToProps: ["someStateProperty"],
    },
    {
      widgetName: "goalperiodOptions",
      widgetFunc: (props: JSX.IntrinsicAttributes) => (
        <GoalperiodOptions
          actionProvider={{
            handlePeriod: undefined,
          }}
          {...props}
        />
      ),
      props: {},
      mapStateToProps: ["someStateProperty"],
    },
    {
      widgetName: "submitOptions",
      widgetFunc: (props: JSX.IntrinsicAttributes) => (
        <SubmitOptions
          actionProvider={{
            handleLogout: undefined,
          }}
          {...props}
        />
      ),
      props: {},
      mapStateToProps: ["someStateProperty"],
    },
    {
      widgetName: "logoutOptions",
      widgetFunc: (props: JSX.IntrinsicAttributes) => (
        <LogoutOptions
          actionProvider={{
            handleData: undefined,
          }}
          {...props}
        />
      ),
      props: {},
      mapStateToProps: ["someStateProperty"],
    },
  ],
};

export default Config;
