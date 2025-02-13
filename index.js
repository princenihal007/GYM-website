import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Classes</a></li>
        <li><a href="#">Membership</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Sign In</a></li>
        <li><a href="#">Sign Up</a></li>
      </ul>
    </nav>
  );
};

const Membership = () => {
  const [selectedPass, setSelectedPass] = useState(null);
  
  const passes = [
    { id: 1, name: "Elite Pass Partial", img: "pass-elite-partial.jpg" },
    { id: 2, name: "Pass Pro Partial", img: "pass-pro-partial.jpg" },
    { id: 3, name: "Pass Home Partial", img: "pass-home-partial-1.jpg" },
  ];

  return (
    <section className="membership">
      <h2>Membership Options</h2>
      <p>Join Tigor Gym today and choose from our various membership plans...</p>
      <div className="passes">
        {passes.map(pass => (
          <div 
            key={pass.id} 
            className={`pass ${selectedPass === pass.id ? "selected" : ""}`}
            onClick={() => setSelectedPass(pass.id)}
          >
            <img src={pass.img} alt={pass.name} />
            <h3>{pass.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <header>
        <h1>Tigor Gym</h1>
        <Navbar />
      </header>
      <Membership />
      <footer>
        <p>&copy; 2024 Tigor Gym. All rights reserved.</p>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
