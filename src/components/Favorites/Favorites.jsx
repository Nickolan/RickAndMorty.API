import { connect } from "react-redux";
import Card from "../Card";
function Favorites(props){
    return (
        <div>
            Favorites
            {
            props.myFavorites.map(elem => <Card 
            name={elem.name} 
            species={elem.species}
            gender={elem.gender}
            image = {elem.image}
            id = {elem.id}
            onClose ={() => alert('Para eliminar toca el corazon')}
            />) 
        }
        </div>
    );
}


export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
 }

export default connect(mapStateToProps, null)(Favorites);