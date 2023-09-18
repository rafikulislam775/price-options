import "./App.css";
import LineChart from "./components/LineChart/LineChart";
import Navbar from "./components/Nav/Navbar/Navbar";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOptions/PriceOptions";
// import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <div className="container m-auto">
        <Navbar></Navbar>
        {/* <Nav></Nav> */}
        <PriceOptions></PriceOptions>
        <LineChart></LineChart>
        <Phones></Phones>
      </div>
    </>
  );
}

export default App;
