import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "6fcf90ad321a.85178fd9012a000d6570";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);
  return (
    <div>
      {character.name ? (
        <>
          <h1>{character.name}</h1>
          <img src={character.image} alt="" width="150" height="200" />
          <h2>species : {character.species}</h2>
          <h2>status: {character.status} </h2>
          <h2>gender: {character.gender} </h2>
          <h2>origin: {character.origin?.name} </h2>
        </>
      ) : (
        <h4>Loading...</h4>
      )}
    </div>
  );
};

export default Detail;
