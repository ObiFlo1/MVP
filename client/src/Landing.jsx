import { useState } from "react";

function Landing({ toggle, onSaveInput }) {
  //state for input
  const [inputValue, setInputValue] = useState("");

  //function to handle form submission
  async function handleSubmit(e) {
    //prevent the page from glitching
    e.preventDefault();
    //pass the input value to the parent componoent
    onSaveInput(inputValue);
    //clear the input field
    setInputValue("");

    //going to send the name of the new user to the datatable
    try {
      const response = await fetch("http://localhost:7001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: inputValue }), //sends input as json
      });
      if (!response.ok) {
        throw new Error("Failed to save user");
      }
      //handle success
      console.log("User saved successfully");
    } catch (error) {
      console.error("Error saving user:", error.message);
    }
    toggle();
  }

  return (
    <form className="landing" onSubmit={handleSubmit}>
      <h1>Create User</h1>
      <input
        required
        name="title"
        placeholder="User's name..."
        type="text"
        value={inputValue} //Bind the nput value to the state variable
        onChange={(e) => setInputValue(e.target.value)} // call handleInputChange  on input change
      />
      <button className="button-container" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Landing;

//make table
//check if user exist
//making multiple request from the front end
//serveer has to handle 2nd tables rest
//table that one to many relationship
