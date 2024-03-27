import {
    GooglePlayButton,
    AppGalleryButton,
    ButtonsContainer,
  } from "react-mobile-app-button";
  
  export const AppLinkButtons = () => {
    const APKUrl = "https://play.google.com";
    const IOSUrl = "https://apps.apple.com";
  
    return (
      <ButtonsContainer>
        <GooglePlayButton
          url={APKUrl}
          theme={"dark"}
          className={"custom-style"}
        />
  
        <AppGalleryButton
          url={IOSUrl}
          theme={"dark"}
          className={"custom-style"}
        />
      </ButtonsContainer>
    );
  };
export default AppLinkButtons;