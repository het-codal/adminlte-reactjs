import Home from "./Components/appHome/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/appDashboard/Dashboard";
import AddProduct from "./Components/Product/AddProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/product/add" element={<AddProduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
