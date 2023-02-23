import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/action";
import Card from "../Card";
function Favorites(props){

    const dispatch = useDispatch();
    const handlerOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>
            <div>
                <select onClick={handlerOrder} >
                    <option value="order" disabled='disabled'>Order By</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onClick={handleFilter}>
                    <option value="filter" disabled='disabled'>Filter By</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="Unknown">Unknown</option>
                </select>
            </div>
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