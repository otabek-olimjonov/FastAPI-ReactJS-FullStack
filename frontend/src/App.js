import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/PriviteRoute";
import PublicRoute from "./routes/PublicRoute";
import Login from "@pages/Login";
import MainLayout from "@layout/MainLayout";
import NotFound from "@pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<PublicRoute />}>
          <Route path="" element={<Login />} />
        </Route>

        <Route path="/" element={<PrivateRoute />}>
          <Route path="" element={<MainLayout />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
