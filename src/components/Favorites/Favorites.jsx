import { useSelector, useDispatch } from "react-redux";
import styles from "./Favorites.module.css";
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../../redux/action";
const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };
  return (
    <div>
      <div>
        <select onChange={handleOrder}>
          <option value="order" disabled="disabled">
            Order By
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="filter" disabled="disabled">
            Filter By
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknow">Unknow</option>
          <option value="Genderless">Genderless</option>
        </select>
      </div>
      {myFavorites.map((characters) => {
        return (
          <div key={characters.id} className={styles.divCard}>
            <img src={characters.image} alt={characters.name} />
            <Link to={`/detail/${characters.id}`}>
              <h2 className={styles.nombre}>{characters.name}</h2>
            </Link>
            <h2 className={styles.nombre}>species : {characters.species}</h2>
            <h2 className={styles.nombre}>gender : {characters.gender}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;

// <div key={character.id}>
//   <div>
//     <img src={character.image} alt={character.name} />
//   </div>
//   <div>
//     <Link to={`/detail/${character.id}`}>
//       <h2 className={styles.nombre}>{character.name}</h2>
//     </Link>
//   </div>
//   <div>
//     <h2 className={styles.nombre}>species:{character.species}</h2>
//     <h2 className={styles.nombre}>gender:{character.gender}</h2>
//   </div>
// </div>
