import { useState } from 'react';

const SingleItem = ({ item, removeItem, editItem }) => {
  const { name, id, completed } = item;

  return (
    <div className="single-item">
      <input
        type="checkbox"
        name={name}
        id={id}
        checked={completed}
        onChange={() => editItem(id, completed)}
      />

      <p style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {name}
      </p>
      <button onClick={() => removeItem(id)} className="btn remove-btn">
        Supprimer
      </button>
    </div>
  );
};
export default SingleItem;
