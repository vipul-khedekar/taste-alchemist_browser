import { CardContainer, Gradient } from "../styles/StyledCard";

function Card(props) {
  const { id, title, image } = props.recipe;

  return (
    <CardContainer key={id}>
      <p>{title}</p>
      <Gradient />
      <img src={image} alt={title} />
    </CardContainer>
  );
}

export default Card;
