import { useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Abouthome from "./Components/Abouthome";
import Servicehome from "./Components/Servicehome";
import Featured from "./Components/Featured";
import Partner from "./Components/Partner";
import Testimonal from "./Components/Testimonal";
import Contacthome from "./Components/Contacthome";
import Footerhome from "./Components/Footerhome";
export default function HomeApp() {
  const { pathname } = useLocation();
  return (
    <>
      <Home />
      <Abouthome />
      <Servicehome />
      <Partner />
      <Featured key={pathname} />
      <Testimonal />
      <Contacthome />
      <Footerhome />
    </>
  );
}
