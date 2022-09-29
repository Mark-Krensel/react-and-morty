import styled from "styled-components";

export default function Card() {
  return (
    <CardElement>
      <h2>Morty</h2>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        alt=""
      />
    </CardElement>
  );
}

const CardElement = styled.li`
  border: 1px grey solid;
  background-color: lightgrey;
  border-radius: 4%;
  box-shadow: 0.1rem;
  height: 300px;
  width: 200px;

  h2 {
    margin-bottom: 0.7rem;
  }

  img {
    width: 130px;
    height: 130px;
    border-radius: 5%;
  }
`;
