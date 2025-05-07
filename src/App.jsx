import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/comp2";
import Comp3 from "./components/comp3";
import Comp4 from "./components/Comp4";
import Footer from "./components/Footer";
import Layoutroutes from "./Routes/Layoutroutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layoutroutes/>
    </>
  );
}

export default App;
