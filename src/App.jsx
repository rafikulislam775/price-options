import "./App.css";
import Navbar from "./components/Nav/Navbar/Navbar";
import PriceOptions from "./components/PriceOptions/PriceOptions";
// import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <div className="container m-auto">
        <Navbar></Navbar>
        {/* <Nav></Nav> */}
        <PriceOptions></PriceOptions>
      </div>
    </>
  );
}

export default App;
