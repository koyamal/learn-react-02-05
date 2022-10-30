import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

export const Top = () => {
  const histroy = useHistory();
  const { setUserInfo } = useContext(UserContext);
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    histroy.push("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    histroy.push("/users");
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
