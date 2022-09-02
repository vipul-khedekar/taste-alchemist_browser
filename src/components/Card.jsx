import { CardContainer, Gradient } from "../styles/StyledCard";

function Card(props) {
  const { id, title, image } = props.recipe;

  return (
    <CardContainer
      key={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <p>{title}</p>
      <Gradient />
      <img src={image} alt={title} />
    </CardContainer>
  );
}

export default Card;
