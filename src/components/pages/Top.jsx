import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  const histroy = useHistory();
  const onClickAdmin = () => {
    histroy.push({ pathname: "/users", state: { isAdmin: true } });
  };
  const onClickGeneral = () => {
    histroy.push({ pathname: "/users", state: { isAdmin: false } });
  };
  return (
    <SContainer>
      <h2>Top page!</h2>
      <SecondaryButton onClick={onClickAdmin}>Admin User</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>Nomal User</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
