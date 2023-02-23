import Card from './Card';
import style from './r&m.module.css';

export default function Cards({ characters, onClose }) {
   
   return <div className={style.cartas}>
      {
         characters?.map(({id, name, species, gender, image}) => {
            return <Card
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            id = {id}
            onClose={() => onClose(id)}
            />
         })
      }
      </div>;
}
