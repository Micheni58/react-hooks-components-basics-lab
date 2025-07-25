import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h2>Home</h2>
    </div>
  );
}

{/* write an <About> component here */}
function About(){
  return(
    <div id="about">
      <h1>About</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      {/* add the <Home> component here */}
      <Home />
      {/* add your <About> component here */}
      <About />
    </div>
  );
}

export default App;
