import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import HeroSectionOne from "./Components/HeroSectionOne";
import HeroSectionTwo from "./Components/HeroSectionTwo";
import group31 from "./FigmaResources/group-31.svg";

function App() {
  return (
    <>
      <NavBar />
      <HeroSectionOne />
      <img src={group31} alt="group31" className="group31" />
      <HeroSectionTwo />
    </>
  );
}

export default App;
