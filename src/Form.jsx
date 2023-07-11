import { useState } from 'react';

import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      toast.warn('Veuillez rentrer un texte');
    }
    if (!name.trim()) return;
    addItem(name);
    setName('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Epicerie</h4>

      <div className="form-control">
        <input
          type="text"
          name="name"
          id="name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <button className="btn ">Ajouter</button>
      </div>
    </form>
  );
};
export default Form;
