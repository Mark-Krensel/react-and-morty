import styled from "styled-components";

export default function Title({ children }) {
  return <Header>{children}</Header>;
}

const Header = styled.h1`
  background-color: purple;
  text-decoration: underline;
  height: 3rem;
  padding: 1rem;
  text-align: center;
  text-justify: center;
  border-bottom: 1px black solid;
  color: white;
`;
