import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import { useState } from "react";

function App() {
  const [image, setImage] = useState([]);

  const handleSubmit = async (term) => {
    const results = await searchImages(term);
    setImage(results);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={image} />
    </div>
  );
}

export default App;
