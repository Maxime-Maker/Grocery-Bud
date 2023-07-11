import SingleItem from './SingleItem';

const Items = ({ items, editItem, removeItem }) => {
  return (
    <div className="items">
      {items.map((item) => (
        <SingleItem
          item={item}
          key={item.id}
          editItem={editItem}
          removeItem={removeItem}
        />
      ))}
    </div>
  );
};
export default Items;
