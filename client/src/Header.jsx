function Header({ saveInput }) {
  console.log(saveInput);
  return (
    <div className="header">
      <div>{`${saveInput}'s To Do List`}</div>
    </div>
  );
}

export default Header;

// return (
//   <div className="header">
//     <div>{`${saveInput}'s To Do List`}</div>
//     <div>
//       <List items={items} />
//     </div>
//     <footer className="footer">
//       <div>
//         <input />
//         <button className="button" onClick={toggle}>
//           Save & Exit
//         </button>
//       </div>
//     </footer>
//   </div>
// );
