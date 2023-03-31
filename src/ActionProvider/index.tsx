class ActionProvider {
  createChatBotMessage: any;
  setState: any;

  constructor(createChatBotMessage: any, setStateFunc: any) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  handleAlright = () => {
    const message1 = this.createChatBotMessage(
      "What is the name of your organization?"
    );
    this.updateChatbotState(message1);
  };
  industry = () => {
    const message2 = this.createChatBotMessage(
      "What industry does your organization work in?",
      { widget: "industryOptions" }
    );
    this.updateChatbotState(message2);
  };
  errorIndustry = () => {
    const message2 = this.createChatBotMessage(
      "This answer length must be min 4"
    );
    this.updateChatbotState(message2);
  };
  handleIndustry = () => {
    const message2 = this.createChatBotMessage(
      "What is the size of your company ?",
      {
        widget: "sizeOptions",
      }
    );
    this.updateChatbotState(message2);
  };
  handleSize = () => {
    const message3 = this.createChatBotMessage(
      "A preferred tenant name ? Note: A tenant name will be the name given to your PMS portal. For example, PossibleWorks Pvt Ltd could pick up “possibleworks” as the tenant name"
    );
    this.updateChatbotState(message3);
  };
  handleTenant = () => {
    const message4 = this.createChatBotMessage(
      "Which non-generic email domains of your organisation will be allowed to login?ex: possibleworks.com, possibleworks.in, possible.worksUse comma seperated values.You have logged in with this domain 'mailinator.com'.This domain is already added by default"
    );
    this.updateChatbotState(message4);
  };

  handleDomain = () => {
    const message5 = this.createChatBotMessage(
      "Which month does your performance year start?",
      {
        widget: "monthOptions",
      }
    );
    this.updateChatbotState(message5);
  };
  errorDomain = () => {
    const errorMessage2 = this.createChatBotMessage(
      "Please enter unique & correct domain name with comma seperated values"
    );
    this.updateChatbotState(errorMessage2);
  };

  handleMonth = () => {
    const message6 = this.createChatBotMessage(
      "Selected Goal Period frequency.",
      {
        widget: "goalperiodOptions",
      }
    );
    this.updateChatbotState(message6);
  };
  handlePeriod = () => {
    const message7 = this.createChatBotMessage(
      "Let us start by setting up the Pivot Id.Note: A Pivot is a senior organizational leader such as CEO, who is responsible for driving the organizational vision & mission, and define the Annual Key Results."
    );
    this.updateChatbotState(message7);
    const message8 = this.createChatBotMessage(
      "Please provide pivot email address?"
    );
    this.updateChatbotState(message8);
  };
  errorEmailDomain = () => {
    const errorMessage = this.createChatBotMessage(
      "Please enter emails that are allowed under the domains provided by you."
    );
    this.updateChatbotState(errorMessage);
  };
  errorEmail = () => {
    const errorMessage3 = this.createChatBotMessage("Invalid email format");
    this.updateChatbotState(errorMessage3);
  };
  handleSubmit = () => {
    const pivotEmail = JSON.parse(localStorage.getItem("CorrectData") || "{}");
    const message9 = this.createChatBotMessage(
      `All set, we have invited ${pivotEmail[7]} to join as the Pivot Id for your firm.`
    );
    this.updateChatbotState(message9);
    const message10 = this.createChatBotMessage(
      "Do you wish to submit this data ?",
      {
        widget: "submitOptions",
      }
    );
    this.updateChatbotState(message10);
  };
  handleLogout = () => {
    const message11 = this.createChatBotMessage(
      "Please wait while we create your tenant. The process usually takes 1-2 minutes."
    );
    this.updateChatbotState(message11);
    const message12 = this.createChatBotMessage(
      "For security reasons, you will be logged out. Re-login to continue",
      {
        widget: "logoutOptions",
      }
    );
    this.updateChatbotState(message12);
  };
  handleData = () => {
    const data = JSON.parse(localStorage.getItem("CorrectData") || "{}");
    alert(data);
  };

  updateChatbotState(message: any) {
    // NOTE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.
    this.setState((prevState: any) => {
      localStorage.setItem("CurrentMessage", JSON.stringify(message));
      localStorage.setItem("data", JSON.stringify(prevState));
      console.log("actionprovider", prevState);
      return {
        messages: [...prevState.messages, message],
      };
    });
  }
}

export default ActionProvider;
