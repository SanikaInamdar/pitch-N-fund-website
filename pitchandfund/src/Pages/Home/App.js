import React from "react";
import Header from "./Header";
import Title from "./Title";
import Process from "./Process";
import Benefits from "./Benefits";
import Footer from "./Footer";
import "../../Assets/Styles/index.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Title />
      <Process />
      <Benefits />
      <Footer />
    </div>
  );
}
export default App;