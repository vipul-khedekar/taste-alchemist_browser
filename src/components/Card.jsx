function Card(props) {
  const { id, title } = props.recipe;

  return <div key={id}>{title}</div>;
}

export default Card;
