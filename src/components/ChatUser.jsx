import React, { useState, useEffect } from "react";
const Emisor = () => {
  const [listEmisor, setListEmisor] = useState([]);
  const listEmisorUrl = `http://localhost:4000/api/chat/listems/${1}`;

  

  const fechListEmisor = () => {
    fetch(listEmisorUrl)
      .then((response) => response.json())
      .then(data => {
        setListEmisor(data);
      });
  };

  useEffect(() => {
    fechListEmisor();
  });

  return (
    <div>
      {listEmisor.map(emisor => 
        <div className="chat-list">
          <p>{emisor.nombre}</p>
         <img
            className="chat-user-info-image"
            src={emisor.foto_de_perfil}
            alt="" />
        </div>
      )}
    </div>
  );
};
export default Emisor;

//const [listReceptor, setListReceptor] = useState({});

//const listReceptorUrl = `http://localhost:4000/api/chat/listrep/${3}`

/*  const fechListReceptor = () => {
     fetch(listReceptorUrl)
         .then(response => response.json())
         .then((data) => {
             setListReceptor(data);
             
         })
 }; */

/*  {listReceptor.map(receptor =>
    <div className="chat-list">
        <p >{receptor.nombre}</p>
        <img
            className="chat-user-info-image"
            src={receptor.foto_de_perfil} />
    </div>
)}  */
