import logo from "../../images/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const LogoImages = styled.img`
  margin-right: 10px;
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImages src={logo} alt="logo" />
      <p>
        <strong>Bira</strong>Books
      </p>
    </LogoContainer>
  );
}

export default Logo;
