export default async function getTrending() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`,
    {
      mode: "cors",
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
}
