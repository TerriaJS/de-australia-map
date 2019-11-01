export const language = {
  WelcomeMessage:
    "Access rich spatial data from multiple Australian government agencies, all from one convenient location.",
  WelcomeMessageSecondaryBtn: "Watch video",
  WelcomeMessageSecondaryBtnClick: () => {
    setTimeout(() => {
      window.setShowWelcomeVideo(true);
    }, 300);
  }
};

export default language;
