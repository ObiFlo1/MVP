import List from "./List";

function Header({ toggle, saveInput }) {
  console.log(saveInput);
  return (
    <div className="list-header">
      <div>{`${saveInput}'s To Do List`}</div>
      <div>
        <List />
      </div>
      <footer className="footer">
        <div>
          <input />
          <button className="button" onClick={toggle}>
            Save & Exit
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Header;
