class MessageParser {
  actionProvider: any;
  previousMessage: any;
  domains: any;

  constructor(actionProvider: any) {
    this.actionProvider = actionProvider;
    const items = JSON.parse(localStorage.getItem("CurrentMessage") || "{}");
    this.previousMessage = items;
    const domains = JSON.parse(localStorage.getItem("CorrectData") || "{}");
    this.domains = domains;
  }

  parse(message: string) {
    const lowerCaseMessage = message;
    let previousMessage = this.previousMessage;
    console.log("prev", previousMessage.message);
    let CorrectData = [];

    if (
      previousMessage.message === "What is the name of your organization?" ||
      previousMessage.message === "This answer length must be min 4"
    ) {
      if (lowerCaseMessage.length > 3) {
        CorrectData.push(lowerCaseMessage);
        localStorage.setItem("CorrectData", JSON.stringify(CorrectData));
        console.log(CorrectData);
        this.actionProvider.industry();
      } else {
        this.actionProvider.errorIndustry();
      }
      console.log("firstmessage");
    }
    if (
      previousMessage.message ===
      "A preferred tenant name ? Note: A tenant name will be the name given to your PMS portal. For example, PossibleWorks Pvt Ltd could pick up “possibleworks” as the tenant name"
    ) {
      console.log("secondmessage");
      let Data2 = JSON.parse(localStorage.getItem("CorrectData") || "{}");
      Data2.push(lowerCaseMessage);
      localStorage.setItem("CorrectData", JSON.stringify(Data2));
      this.actionProvider.handleTenant();
    }
    const validDomain = /^[^\s@]+\.[^\s@]+$/;
    if (
      previousMessage.message ===
        "Which non-generic email domains of your organisation will be allowed to login?ex: possibleworks.com, possibleworks.in, possible.worksUse comma seperated values.You have logged in with this domain 'mailinator.com'.This domain is already added by default" ||
      previousMessage.message ===
        "Please enter unique & correct domain name with comma seperated values"
    ) {
      const msgs = lowerCaseMessage.split(",");
      const pass = msgs.every((msg) => {
        return validDomain.test(msg);
      });
      if (pass) {
        let Data3 = JSON.parse(localStorage.getItem("CorrectData") || "{}");
        Data3.push(lowerCaseMessage);
        localStorage.setItem("CorrectData", JSON.stringify(Data3));
        this.actionProvider.handleDomain();
      } else {
        this.actionProvider.errorDomain();
      }

      console.log("thirdmessage");
    }
    if (
      previousMessage.message === "Please provide pivot email address?" ||
      previousMessage.message === "Invalid email format" ||
      previousMessage.message ===
        "Please enter emails that are allowed under the domains provided by you."
    ) {
      console.log("fourthmessage");

      const EmailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const allowedDomainsString = this.domains[4];
      console.log(allowedDomainsString);
      let allowedDomains = allowedDomainsString.split(",");
      allowedDomains.push("mailinator.com");
      const Domain = lowerCaseMessage.split("@")[1];
      if (EmailFormat.test(lowerCaseMessage)) {
        const ValidEmail = allowedDomains.some(
          (domain: any) => domain === Domain
        );
        if (ValidEmail) {
          let Data4 = JSON.parse(localStorage.getItem("CorrectData") || "{}");
          Data4.push(lowerCaseMessage);
          localStorage.setItem("CorrectData", JSON.stringify(Data4));
          this.actionProvider.handleSubmit();
        } else {
          this.actionProvider.errorEmailDomain();
        }
      } else {
        this.actionProvider.errorEmail();
      }
    }
  }
}

export default MessageParser;
