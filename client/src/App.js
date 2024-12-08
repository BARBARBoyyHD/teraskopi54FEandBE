import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPages from "./pages/LoginPages";
import Dashboard from "./pages/Dashboard";
import RegisterUserPages from "./pages/RegisterUserPages";
import Practice from "./pages/Practice";
function App() {
  return (
    <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/pages/login"element={<LoginPages/>}/>
            <Route path="/pages/Dashboard" element={<Dashboard/>}/>
            <Route path="/pages/Register/user" element={<RegisterUserPages/>}/>
            <Route path="/pages/practice"element={<Practice/>}/>
          </Routes>
    </Router>
  );
}

export default App;
