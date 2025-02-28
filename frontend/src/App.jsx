import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Provinsi from "./pages/Provinsi";
import Login from "./pages/Login";
import GuestRoute from "./routes/GuestRoute";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="auth" element={<GuestRoute />}>
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="admin" element={<ProtectedRoute />}>
          <Route path="provinsi" element={<Provinsi />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
