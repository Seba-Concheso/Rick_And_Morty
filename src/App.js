import Styles from "./App.module.css";
import axios from "axios";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav.jsx";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Error from "./components/Error/Error.jsx";

function App() {
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡Algo salió mal!");
        }
      }
    );
  }
  const [characters, setCharacters] = useState([]);

  return (
    <div className={Styles.background}>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
