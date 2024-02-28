function List({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;

// i need to use map
