import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <h4> ¡ Descubre nuestra colección y haz que tu estilo destaque entre la multitud !</h4>
    </div>
  );
};

export default ItemListContainer;
