import styled from "styled-components";

export default function Navigation() {
  return (
    <NavWrapper>
      <NavElement type="button">Home</NavElement>
      <NavElement type="button">Favorites</NavElement>
      <NavElement type="button">Sppecial 1</NavElement>
      <NavElement type="button">Special 2</NavElement>
    </NavWrapper>
  );
}

const NavWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: purple;
  padding: 0.5rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px black solid;
`;

const NavElement = styled.li`
  border-left: 1px white solid;
  padding: 0.3rem;
  color: white;
  cursor: pointer;

  &:active {
    background-color: greenyellow;
    color: black;
  }
`;
