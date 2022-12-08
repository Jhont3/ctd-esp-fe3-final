import React from "react";
import { Link } from "react-router-dom";

const Card = ({item}) => {
  // console.log(item);
  const {name, username, id} = item;

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    
  }

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <Link to={`/detail/${id}`}>
          <img src="./images/doctor.jpg" alt="Doctor" style={{width: "200px"}}></img>
          <h3>{name}</h3>
          <h4>{username}, Id: {id}</h4>
          <button onClick={addFav} className="favButton">Add fav</button>
        </Link>
    </div>
  );
};

export default Card;
