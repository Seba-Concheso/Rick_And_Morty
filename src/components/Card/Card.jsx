import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/action";

export default function Card({ id, name, species, gender, image, onClose }) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(addFav(id, name, species, gender, image, onClose));
    }
  };
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);
  return (
    <div className={styles.divCard}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button onClick={() => onClose(id)} className={styles.boton}>
        X
      </button>
      <img src={image} alt={name} />
      <Link to={`/detail/${id}`}>
        <h2 className={styles.nombre}>{name}</h2>
      </Link>
      <h2 className={styles.nombre}>species : {species}</h2>
      <h2 className={styles.nombre}>gender : {gender}</h2>
    </div>
  );
}
