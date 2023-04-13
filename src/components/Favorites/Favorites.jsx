import { useSelector, useDispatch } from "react-redux";
import styles from "./Favorites.module.css";
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../../redux/action";
import Card from "../Card/Card";
import { connect } from "react-redux";

const Favorites = ({ myFavorites }) => {
  // const { myFavorites } = useSelector((state) => state);
  // const dispatch = useDispatch();
  // const handleOrder = (event) => {
  //   dispatch(orderCards(event.target.value));
  // };
  // const handleFilter = (event) => {
  //   dispatch(filterCards(event.target.value));
  // };
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div>
        {/* <select onChange={handleOrder}>
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
        </select> */}
      </div>
      <h1>Lista de favoritos</h1>
      {myFavorites?.map((fav) => {
        return (
          <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            species={fav.species}
            gender={fav.gender}
            image={fav.image}
          />
        );
      })}
    </div>
  );
};

//export default Favorites;

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
