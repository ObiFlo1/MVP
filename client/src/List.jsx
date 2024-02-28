function List() {
  const item = [];

  return (
    <div className="list">
      <div>
        {item.map((item) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default List;

// i need to use map
