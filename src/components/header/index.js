import Logo from "../logo";
import OptionsHeader from "../optionsHeader";
import IconsHeader from "../iconsHeader";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OptionsHeader />
      <IconsHeader />
    </HeaderContainer>
  );
}

export default Header;
