import { useEffect } from "react";

function Landing({ toggle }) {
  // connect the front end & back end
  async function connectDb() {
    try {
      const response = await fetch(`http://localhost:7001/users`);
      const json = await response.json();
      console.log(json);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => connectDb, []);

  return (
    <form className="landing">
      <h1>Create User</h1>
      <input required name="title" placeholder="User's name..." type="text" />
      <button clanName="button-container" type="submit" onClick={toggle}>
        Submit
      </button>
    </form>
  );
}

export default Landing;

// onClick = save new variable(in nextWindow) display nextwindow with <div>{next window}</div>

//send info to database
// async function sendInfo() {
//   try {
//     const response = await fetch(`http://localhost:7001/users`, {
//       method: "POST",
//       header: { "Content-Type": "application/json" },
//       body: JSON.stringify(),
//     });
//     console.log(response);
//   } catch (err) {
//     console.error(err);
//   }
// }
