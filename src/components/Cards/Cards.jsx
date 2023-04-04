import Card from "../Card/Card.jsx";
import styles from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={styles.contenedor}>
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            id={id}
            image={image}
            name={name}
            species={species}
            gender={gender}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
