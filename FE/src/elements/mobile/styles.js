import styled from "styled-components";

export const MobileAuthPanel = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    display: block;
    box-sizing: border-box;
  }
`;

export const MobileAuthPanelHead = styled.div`
  display: flex;
  margin: 10px auto 0 auto;
  width: 95%;
  justify-content: space-between;
  border: 1px black solid;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme?.palette?.mobileMenuTitle};
`;

export const MobileLoginPanelContent = styled.div`
  display: flex;
  margin: 0 auto 0 auto;
  width: 95%;
  height: 160px;
  border: 1px black solid;
  border-top: none;
  box-sizing: border-box;
  justify-content: center;
  padding: 10px;
  background-color: ${({ theme }) => theme?.palette?.mobileContentBackground};

  animation: slide-down-auth 200ms;

  @keyframes slide-down-auth {
    from {
      height: 0;
    }
    to {
      height: 160px;
    }
  }
`;

export const MobileProfilePanelContent = styled.div`
  display: flex;
  margin: 0 auto 0 auto;
  width: 95%;
  height: 200px;
  border: 1px black solid;
  border-top: none;
  box-sizing: border-box;
  justify-content: center;
  padding: 10px;
  background-color: ${({ theme }) => theme?.palette?.mobileContentBackground};

  animation: slide-down-auth 200ms;

  @keyframes slide-down-auth {
    from {
      height: 0;
    }
    to {
      height: 200;
    }
  }
`;

export const MobileRegistrationPanelContent = styled.div`
  display: flex;
  margin: 0 auto 0 auto;
  width: 95%;
  height: 220px;
  border: 1px black solid;
  border-top: none;
  box-sizing: border-box;
  justify-content: center;
  padding: 10px;
  background-color: ${({ theme }) => theme?.palette?.mobileContentBackground};

  animation: slide-down-regi 200ms;

  @keyframes slide-down-regi {
    from {
      height: 0;
    }
    to {
      height: 220px;
    }
  }
`;

export const MobileAuthPanelButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme?.palette?.mobileMenuButton};
  font-size: 20px;
  box-sizing: border-box;
  border: black;
`;

export const MobileAuthPanelLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-top: 2px;
  margin-right: 4px;
  color: ${({ theme }) => theme?.palette?.headerTextColor};
`;

export const MobileFilterPanel = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }) =>
      theme?.globals?.breakpoints?.sm}) {
    display: block;
    box-sizing: border-box;
  }
`;

export const MobileFilterPanelHead = styled.div`
  display: flex;
  margin: 10px auto 0 auto;
  width: 95%;
  justify-content: space-between;
  border: 1px black solid;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme?.palette?.mobileMenuTitle}; ;
`;

export const MobileFilterPanelContent = styled.div`
  display: block;
  margin: 0 auto 0 auto;
  width: 95%;
  height: 170px;
  border: 1px black solid;
  border-top: none;
  box-sizing: border-box;
  justify-content: center;
  padding: 10px;
  background-color: ${({ theme }) => theme?.palette?.mobileContentBackground};
  animation: slide-down-filter 200ms;

  @keyframes slide-down-filter {
    from {
      height: 0;
    }
    to {
      height: 170px;
    }
  }
`;

export const MobileFilterPanelLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-top: 2px;
  margin-right: 4px;
  color: ${({ theme }) => theme?.palette?.headerTextColor};
`;

export const MobileFilterPanelButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme?.palette?.mobileMenuButton};
  font-size: 20px;
  box-sizing: border-box;
  border: black;
`;

export const CloseMobileSettingsModalButton = styled.button`
  padding: 3px;
  width: 60px;
  margin-top: 10px;
  margin-left: 18px;
`;
