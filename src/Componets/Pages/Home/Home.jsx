import Menu from "../../Header/Menu"; // Corrected relative path
import "../Home/Home.css";
import CardsHome from "./CardsHomes";

  
const Home = () => {
  return (
    <div>
      <Menu />
      <div>
           <CardsHome/>
      </div>
    </div>
  );
};

export default Home;
