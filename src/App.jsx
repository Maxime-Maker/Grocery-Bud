import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Items from './Items';
import Form from './Form';

const localData = localStorage.getItem('epicerie')
  ? JSON.parse(localStorage.getItem('epicerie'))
  : [];
const setLocalStorage = (article) => {
  localStorage.setItem('epicerie', JSON.stringify(article));
};
const App = () => {
  const [items, setItems] = useState(localData);

  useEffect(() => {
    localStorage.setItem('epicerie', JSON.stringify(items));
  }, []);

  const addItem = (name) => {
    toast.success('Article ajouté');
    const newItem = {
      id: Date.now(),
      name: name,
      completed: false,
    };

    setItems([...items, newItem]);
    setLocalStorage([...items, newItem]);
  };

  const removeItem = (id) => {
    const filteredItem = items.filter((name) => name.id !== id);
    setItems(filteredItem);
    toast.error('Article Supprimé');
  };

  const editItem = (id, completed) => {
    items.map((item) => {
      if (item.id === id) {
        item.completed = !completed;
      }
    });
    setLocalStorage(items);
    setItems(JSON.parse(localStorage.getItem('epicerie')));
  };

  return (
    <>
      <section className="section-center">
        <ToastContainer />
        <Form addItem={addItem} />
        <Items removeItem={removeItem} editItem={editItem} items={items} />
      </section>
    </>
  );
};

export default App;
