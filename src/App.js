import { motion } from "framer-motion";

import Pages from "./pages/Pages";
import Options from "./components/Options";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";

function App() {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />

      <SearchBar />

      <Options />

      <Pages />
    </motion.article>
  );
}

export default App;
