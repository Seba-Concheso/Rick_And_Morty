import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ id, name, species, gender, image, onClose }) {
  return (
    <div className={styles.divCard}>
      <button onClick={() => onClose(id)} className={styles.boton}>
        X
      </button>
      <img src={image} alt="" />
      <Link to={`/detail/${id}`}>
        <h2 className={styles.nombre}>{name}</h2>
      </Link>
      <h2 className={styles.nombre}>species : {species}</h2>
      <h2 className={styles.nombre}>gender : {gender}</h2>
    </div>
  );
}
