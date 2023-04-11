import Styles from "./App.module.css";
import axios from "axios";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav.jsx";
import { useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Error from "./components/Error.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites";

//modelo de la api
const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "6fcf90ad321a.85178fd9012a000d6570";
//axios(`${URL_BASE}/${id}Key=${API_KEY}`)

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAcces] = useState(false);
  const navigate = useNavigate();
  //Validacion de mentira
  const email = "sebas@gmail.com";
  const password = "1234asdf";

  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
      setAcces(true);
      navigate("/home");
    } else {
      window.alert("¡Contraseña incorrecta!");
    }
  };
  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onClose = (id) => {
    const charactersFiltered = characters.filter((char) => char.id !== id);
    setCharacters(charactersFiltered);
  };

  function onSearch(id) {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name && !characters.find((char) => char.id === data.id)) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡Algo salió mal!");
      }
    });
  }

  return (
    <div className={Styles.background}>
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
