import List from "./List";

function Header({ toggle }) {
  return (
    <div className="list-header">
      <div>User's To do list</div>
      <div>
        <List />
      </div>
      <footer className="footer">
        <div>
          <button className="button" onClick={toggle}>
            Save & Exit
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Header;
