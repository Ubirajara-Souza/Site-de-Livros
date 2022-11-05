import profile from "../../images/profile.svg";
import bags from "../../images/bags.svg";
import styled from "styled-components";

const Icon = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const Icons = styled.ul`
  display: flex;
  align-items: center;
`;

const icons = [profile, bags];

function IconsHeader() {
  return (
    <Icons>
      {icons.map((icons) => (
        <Icon>
          <img src={icons} alt="icons"></img>
        </Icon>
      ))}
    </Icons>
  );
}

export default IconsHeader;
