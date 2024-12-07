import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


// Header component
function Header({ message }) {
  return <h1 className="header-message"> {message}</h1>;
}


// Main App Component
function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });

  const [message, setMessage] = useState("");

  const inputEvent = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue) => {
      //console.log(preValue)
      if (name === "fName") {
        return {
          fname: value, // changed value
          lname: preValue.lname, // unchanged value
        }
      } else if (name === "lName") {
        return {
          fname: preValue.fname,
          lname: value,
        }
      }
    }
    )
  }

  const onSubmits = (event) => {
    event.preventDefault();
    
    alert("Welcome to this world!")
   
    // Show success message
    setMessage(`Success! Form submitted by ${fullName.fname} ${fullName.lname}.`);
    
    setFullName({
      fname: "",
      lname: "",
    })
  };


  return (
    <>
      <div className="main-div">

        {/* passing props to Header */}
        <Header message={message} />

        <form onSubmit={onSubmits}>
          <div>
            <h1>Hello</h1>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="fName"
              onChange={inputEvent}
              value={fullName.fname}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              name="lName"
              onChange={inputEvent}
              value={fullName.lname}
            />
            <button type="submit"> Submit ✔ </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
