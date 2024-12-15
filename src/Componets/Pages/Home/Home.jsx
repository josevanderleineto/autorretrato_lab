import Menu from "../../Header/Menu"; // Corrected relative path
import "../Home/Home.css";
import CardsHome from "./CardsHomes";

  
const Home = () => {
  return (
    <div>
      <Menu />
      <div>
      <h1 className="display-5 text-center">Autorretrato Lab</h1>

           <CardsHome/>

      </div>
    </div>
  );
};

export default Home;
