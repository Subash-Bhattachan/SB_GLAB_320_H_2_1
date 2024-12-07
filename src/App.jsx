import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// function Header() {
//   return (<h1>Simple React Application</h1>);
// }

// function Content(props) {
//   return (<p style={{ color: props.color }}>{props.text}</p>);
// }

// function Footer() {
//   return (<h1>Created by Me, of course.</h1>);
// }

// Header component
function Header ({ message }) {
  return <h1> {message}</h1>;
}

// FormInput component
function FormInput ({ name, value, placeholder, onChange }) {
  return {

    
  }


}


function App() {

  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });

  const [message, setMessage] = useState("");

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue) => {
      //console.log(preValue)
      if (name === "fName") {
        return {
          fname: value,
          lname: preValue.lname,
        }
      } else if (name === "lName") {
        return {
          fname: preValue.fname,
          lname: value,
        }

      }

    }
    )}

  const onSubmits = (event) => {
    event.preventDefault();
    //alert("Form submitted")
    // Show success message
    setMessage(`Form submitted by ${fullName.fname} ${fullName.lname}`);
    setFullName ({
      fname: "",
      lname: "",
    })
  };

  return (
    <>
      <div className="main-div">

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
