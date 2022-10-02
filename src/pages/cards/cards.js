import styled from 'styled-components';
import Card from '../../components/card/Card';

export default function Cards({ cards }) {
  return (
    <CardContainer>
      {cards.map((card) => (
        <Card key={card.id} picture={card.image} name={card.name} id={card.id} />
      ))}
    </CardContainer>
  );
}

const CardContainer = styled.div``;
