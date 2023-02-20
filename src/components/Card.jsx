import style from './r&m.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { addFavorite, removeFavorite } from '../redux/action';
import { connect } from 'react-redux';

function Card({name, species, gender, image, onClose, id, addFavorite, removeFavorite, myFavorites}) {

   const [isFav, setFav] = React.useState(false)
      
   function handleFavorite() {
      if (isFav) {
         setFav(false)
         removeFavorite(id)
      }else {
         setFav(true)
         addFavorite({name, species, gender, image, id})
      }
   }


   React.useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setFav(true);
         }
      });
   }, [myFavorites]);

   return (
      
      <div className={style.card}>
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )}


         <button className={style.cardbutton} onClick={() => onClose()}>X</button>
         <Link to={`/detail/${id}`}>
         <h2 className={style.cardName}>{name}</h2>
         </Link>
         
         <h2 className={style.cardSpecie}>{species}</h2>
         <h2 className={style.cardGender}>{gender}</h2>
         <img className={style.imagen}  src={image}/> 
      </div>
   );
   
}

export const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

// export const mapDispatchToProps = (dispatch) =>{
//    return {
//       addFavorite: (character) => dispatch(addFavorite(character)),
//       removeFavorite: (id) => dispatch(removeFavorite(id))
//    }
// }

export default connect(mapStateToProps, { addFavorite, removeFavorite})(Card)
// export default connect(mapStateToProps, mapDispatchToProps)(Card)

