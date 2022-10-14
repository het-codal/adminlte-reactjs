import Header from "../appHeader/Header";
import Menu from "../appMenu/Menu";
import Footer from "../appFooter/Footer";
import Setting from "../appSetting/Setting";
import Dashboard from "../appDashboard/Dashboard";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Outlet />
      <Footer />
      <Setting />
    </div>
  );
}

export default Home;
