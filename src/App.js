import Pages from "./pages/Pages";
import Options from "./components/Options";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <Options />
      <Pages />
    </div>
  );
}

export default App;
