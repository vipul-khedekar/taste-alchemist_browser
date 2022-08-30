import { useEffect } from "react";

import getTrending from "../calls/getTrending";

function Trending() {
  useEffect(() => {
    getTrending();
  }, []);

  return <div>Trending</div>;
}

export default Trending;
